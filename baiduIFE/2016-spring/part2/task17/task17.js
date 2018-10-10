/*
Author: xin
Date: 2018.10.9
Note:
   key code:
     initAqiData()
	 renderData()
	 
   event.target 
*/

/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-02");
  //var dat = new Date(Date.UTC(2016,0));
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};


// 用于渲染图表的数据
var chartData = {};
var days = {};
var week = {};
var month = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

var eleTime = document.getElementById("form-gra-time");
var eleCity = document.getElementById("city-select");


/**
 * 初始化函数
 */
init();

function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
  
  if (pageState['nowSelectCity'] == -1) {
        pageState['nowSelectCity'] = 0;
		getChartData();
        renderChart();
  }
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  eleTime.addEventListener("click", graTimeChange, false);
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var options = "";
  
  for(ele in aqiSourceData){
    options += "<option>" + ele + "</option>";
  }
  
  eleCity.innerHTML = options;
  
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  eleCity.addEventListener("change", citySelectChange, false);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  
  // 将原始的源数据处理成图表需要的数据格式 
  /*******************  get day value of all cities ******************/
  //days = aqiSourceData; //had better NOT directly set object value
  
  
  /*******************  get week and month value of all cities ******************/
  for(city in aqiSourceData){
    var value = aqiSourceData[city]; 
	
	var dayValueEle = {};
	/*{
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
    }*/
	
	var weekValueEle = {};
	/*
	{
	  1 : avgValue:10,
	  2 : avgValue:12	
	}
	*/
	var monthValueEle = {};
    /*
	{
	  2015-12 : avgValue:10,
	  2016-01 : avgValue:12	
	}
	*/
	
	var keys = Object.keys(value); //keys[i], value[keys[i]]
	
	var weekNum = 0;//how many weeks
	var totalValue = 0;//total values sum
	var weekValue = 0;	
	
	var lastMonth = 0;//which month 0-11
	var lastDay = 0;//which day ,1-31
	var lastYear = 0;
	var thisMonth = 0;	  
	var thisDay = 0;
	var thisYear = 0;
	var totalValue2 = 0;
	var monthNum = 0;	
	
    for(var i=0; i<keys.length; i++){  
	  //get property and value
	  var day = keys[i];//2016-01-01
	  var dayValue = value[day];//10
	  
	  //use new Date() to get a new string
	  var dat = new Date(day); 
      var yearT = dat.getFullYear();
      var monthT = dat.getMonth()+1;//0-11
      var dayT = dat.getDate();//1-31
      day = yearT + "-" + monthT + "-" + dayT;	  
	  
	  //01. get day value
	  dayValueEle[day] = dayValue;
	  
	  
	  //02.  get week value

	  var weekDay = dat.getDay();//0-Sunday, 6-Saturday
	  
      	  
	  //if(weekNum ==0 && weekDay!=0) continue; //first days not a whole week not include
	  
	  //get total value
	  totalValue += dayValue;
	  
	  //last day of week
	  var lastIndex = 0;
	  if( weekDay == 6){
	    //for the first non-whole week
	    if(weekNum == 0){
		  weekValue = (totalValue/(i+1)).toFixed(2);
		}
	    weekValue = (totalValue/7).toFixed(2);
		totalValue = 0;
		weekNum++;
		lastIndex = i;
		
	    weekValueEle[weekNum] = weekValue;	
        weekValue = 0;		
	  }
	  //or last day of data array
	  if( (i==(keys.length-1))&& weekDay!=6 ){
	    weekValue = (totalValue/(i-lastIndex)).toFixed(2);
		totalValue = 0;
		weekNum++;
		
		weekValueEle[weekNum] = weekValue;
		weekValue = 0;
	  }
	  
	  //03.  get month value

	  thisMonth = dat.getMonth();	  
	  thisDay = dat.getDate();//which day of month, 1-31
	  thisYear = dat.getFullYear();
	  	  
	  if(i == 0){
		lastMonth = thisMonth;
		lastDay = thisDay;
		lastYear = thisYear;
	  }else{
	    var dat1 = new Date(keys[i-1]);
	    lastMonth = dat1.getMonth();
		lastDay = dat1.getDate();
		lastYear = dat1.getFullYear();
	  }
	  
	  totalValue2 += dayValue;
	  
	  //a new WHOLE month begins
	  if(thisDay == 1){
	    //first non-whole month
		var tmp = lastYear+"-"+(lastMonth+1);//if only month, 2015-12 will after 2016-01, so here put year and month together
	  	if(monthNum == 0){
		  monthValueEle[tmp] = ( (totalValue2-dayValue)/i ).toFixed(2);
		}else{
		  monthValueEle[tmp] = ( (totalValue2-dayValue)/lastDay).toFixed(2);
		}
		monthNum++;
		totalValue2 = 0;
	  }
	  
	  //the last non-whole month
	  if( i == (keys.length-1) ){
	    var tmp = thisYear+"-"+(thisMonth+1);
	    monthValueEle[tmp] = ( totalValue2/thisDay ).toFixed(2);
	  }
	  
	}// end for keys in value	
	
	days[city] = dayValueEle;
    week[city] = weekValueEle;
	month[city] = monthValueEle;
	
  }// end for city
  
  
}

/**
 * 渲染图表
 */
function renderChart() {
    //days
  	/*{
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
    }*/
	
    //week
	/*
	{
	  1 : avgValue:10,
	  2 : avgValue:12	
	}
	*/
	
    //month
    /*
	{
	  2015-12 : avgValue:10,
	  2016-01 : avgValue:12	
	}
	*/
   
  var html = "";
  var width = "";
  var title = "";
  
  for(val in chartData){
	var height = chartData[val]*0.75;
	var clr = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + ")";
	
	var city = eleCity.options[pageState.nowSelectCity].value; 
	
	if(pageState.nowGraTime =='day'){
       width = "25px";
	   title = city + val + "的空气质量数值为：" + chartData[val];
	}else if(pageState.nowGraTime =='week'){
	   width = "40px";
	   title = city + "第" + val + "周的空气质量数值为：" + chartData[val];
	}else if(pageState.nowGraTime =='month'){
	   width="70px";
	   title = city + val + "月的空气质量数值为：" + chartData[val];
	}
	
	html += "<div style='width:" + width + ";height:" + height + "; background-color:" + clr + ";'" + " title=" + "'" + title + "'" + "></div>";
  }  	
  
  document.getElementById("aqi-chart").innerHTML = html;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(e) {
  // 确定是否选项发生了变化
  /*var tmp = eleTime.childNodes;
  for(var i=0; i<tmp.length; i++){
     var ele = tmp[i];
	 if(ele.nodeName == "LABEL"){//label
	    if(ele.childNodes[1].checked){
		  pageState.nowGraTime = ele.childNodes[1].value;
		}
	 }
  }*/
  //IMPORTANT
  if (pageState["nowGraTime"] == e.target.value) {
      return false;
  };
  // 设置对应数据
  pageState["nowGraTime"] = e.target.value;
  getChartData();

  // 调用图表渲染函数
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(e) {
  // 确定是否选项发生了变化 
  if (eleCity.options[pageState["nowSelectCity"]] == e.target.value) {
        return false;
  };
  
  // 设置对应数据
  //ageState["nowSelectCity"] = e.target.value;
  pageState.nowSelectCity = eleCity.selectedIndex; 
  getChartData();
  
  // 调用图表渲染函数
  renderChart();
}

function getChartData(){
  var time = pageState.nowGraTime;
  var city = eleCity.options[pageState.nowSelectCity].value;
  
  if( time == 'day'){
    chartData = days[city];
  }else if(time == 'week'){
    chartData = week[city];
  }else if(time =='month'){
    chartData = month[city];
  }
}
