/*
Author: xin
Date: 2018.9.20
Description:  Get data from HTML, sort data, display data in HTML

*/

init();

function init() {
  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  document.getElementById("sort-btn").onclick = function(){
    btnHandle();
  };
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}

/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  var data = [];
  var html = document.getElementById("source").innerHTML;
  var city = html.match(/[\u4E00-\u9FA5]{6}/g); //key step
  var val = html.match(/\d{2}/g);  
  
  for(var i=0; i<city.length; i++){
    var part1 = city[i].slice(0,2);
	var ele = [];
	ele.push(part1);
	ele.push(val[i]);
	data.push(ele);
  }

  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */

  return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
   data.sort(function(a,b){
     return a[1]-b[1] ;
   });

   return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
   var mapNum = {1:'一', 2:'二', 3:'三', 4:'四', 5:'五', 6:'六', 7:'七'};
   var html = "";
   for(var i=0; i<data.length; i++){
       html += "<li>第" + mapNum[i+1] + "名 ：" + data[i][0] + "空气质量：<b>" + data[i][1] + "</b></li>";
   }
   
   document.getElementById("resort").innerHTML = html;
}
