/*
Author: xin
Date: 2018.9.28
Description: Get data from HTML, display in Table and delete dynamically.
NOTE: put <script> at the end of the body!!! or use document.ready(){}
*/

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

init();


function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var add = document.getElementById("add-btn"); 
  add.onclick = function(){
    addBtnHandle();
  };

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数 
  /*document.getElementById("aqi-table").onclick = function(event){ 
    var ev = event || window.event;
    var btn = ev.target;//here currentTarget is table, target and srcElement is button
	if(btn.nodeName.toLowerCase() == "button"){
	   delBtnHandle(btn);
	}
  };*/
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  if(Object.keys(aqiData).length>0){
    renderAqiList();
  } 
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(btn) {
  // do sth.
  var key = btn.parentNode.previousSibling.previousSibling.innerText;
  delete aqiData[key];
  renderAqiList();
}

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var city = document.getElementById("aqi-city-input").value.trim();
  var val = document.getElementById("aqi-value-input").value.trim();
  
  
  if( !(/^[\u4E00-\u9FA5]+$/.test(city) || /^[a-zA-Z]+$/.test(city)) ){
    alert("城市名称只接受全中文或全英文字符!");
  }else if( !(/^\d+$/.test(val)) || /[.]/.test(val) ){
    alert("空气质量只接受整数!");
  }else{
	aqiData[city] = val;
  }  

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  //<thead><td>城市</td><td>空气质量</td><td>操作</td></thead>
  var html = "<thead><td>城市</td><td>空气质量</td><td>操作</td></thead>";
  
  for(key in aqiData){
    //<tr><td>北京</td><td>90</td><td><button>删除</button></td></tr>
    html += "<tr><td>" + key + "</td><td>" + aqiData[key] + "</td><td><button>删除</button></td></tr>";
  }	  

  document.getElementById("aqi-table").innerHTML = html; 
  
  /*var btns = document.getElementsByTagName('table')[0].getElementsByTagName("button"); //cannot "table button"
  for(var i=0; i<btns.length; i++){
    btns[i].onclick = function(event){
	  var btn = event.target;
	  delBtnHandle(btn);
	};
  }*/

}
