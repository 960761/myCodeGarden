/*
Author: xin
Date: 2018.10.16
Description: Stimulate the array and visualize sort algorithm
*/

var input = document.getElementById("inputText");

var leftIn = document.getElementById("inputLeftIn");
var rightIn = document.getElementById("inputRightIn");
var leftOut = document.getElementById("inputLeftOut");
var rightOut = document.getElementById("inputRightOut");

var random60 = document.getElementById("randomNum");
var sortSpeed = document.getElementById("ideNum");
var sortBtn = document.getElementById("sort");
var refreshBtn = document.getElementById("refresh");

var content = document.getElementById("content");

//var inputVal = "";
var numberStatus = 0;

//input value validate
/*input.addEventListener("blur", inputBlur, false);

function inputBlur(e){
  var val = e.target.value;
  
  if( !(/^[0-9]+$/.test(val)) ){
    alert("please input integer!");
	e.target.value = "";
  }else{
    inputVal = e.target.value;
  }
}*/

//过滤数字
function validNum() {
    var num = parseInt(input.value);
    if ((isNaN(num)) || (num < 10) || (num > 100)) {
        alert("请输入10-100的数字。");
        return false;
    } else {
        return num;
    }
}

//left in
leftIn.addEventListener("click", leftInFtn, false);

function leftInFtn(){

    if (numberStatus == 1) {
   	    alert("已随机选取数字，无法手动添加。");
        return false; 
	}
    var inputVal = validNum();
    var liNum = content.childNodes.length;

    if(inputVal != false){
	   if(liNum < 50){
	   	  var ele = document.createElement("li");
	      ele.innerHTML = inputVal;
	   
	      var clr = "background-color:rgb(" + Math.ceil(Math.random(0,255)*255) + "," + Math.ceil(Math.random(0,255)*255) + "," + Math.ceil(Math.random(0,255)*255) + ");";
	      ele.style.cssText = clr;
	   
	      content.insertBefore(ele, content.firstChild);	   
	   }else{
	      alert("最多输入50个哦~");
	   }

    }

}

//left out
leftOut.addEventListener("click", leftOutFtn, false);

function leftOutFtn(){

   if(content.childNodes.length){
      var ele = content.firstChild;
	  var str = "The LEFT most child value:" + ele.innerHTML + " will be deleted";
	  alert(str);
      content.removeChild(ele);
   }else{
      alert("no element to delete");
   }

}

//right in
rightIn.addEventListener("click", rightInFtn, false);

function rightInFtn(){

    if (numberStatus == 1) {
   	    alert("已随机选取数字，无法手动添加。");
        return false; 
	}
    var inputVal = validNum();
    var liNum = content.childNodes.length;


   if(inputVal != false){
   
       if(liNum < 50){
	   	  var ele = document.createElement("li");
	      ele.innerHTML = inputVal;
	   
	      var clr = "background-color:rgb(" + Math.ceil(Math.random(0,255)*255) + "," + Math.ceil(Math.random(0,255)*255) + "," + Math.ceil(Math.random(0,255)*255) + ");";
	      ele.style.cssText = clr;
	   
	      content.appendChild(ele);	   
	   }else{
	      alert("最多输入50个哦~");
	   }

   }

}

//left out
rightOut.addEventListener("click", rightOutFtn, false);

function rightOutFtn(){
   if(content.childNodes.length){
      var ele = content.lastChild;
	  var str = "The RIGHT most child value:" + ele.innerHTML + " will be deleted";
	  alert(str);
      content.removeChild(ele);
   }else{
      alert("no element to delete");
   }

}


//get 60 random number
random60.addEventListener("click", getRandom, false);

function getRandom(){
   
   var html = "";
   
   if( numberStatus == 1){
      alert("already have value");
   }else{
   
	for(var i=0; i<50; i++){
	   var val = Math.ceil(Math.random(10,100)*90 + 10);
	   html += "<li title='" + val + "' style='height: " + val + "px;'></li>";
	}
	   
	content.innerHTML = html;
	numberStatus = 1;
   }
   
}

//sort
sortBtn.addEventListener("click", sortFtn, false);
function sortFtn(){
    var Li = content.childNodes,
    len = Li.length,
    i = 0, //used to iterate through each number
    j = len - 1,// used to for one number to compare all times
    sortSpeed = 50,
    inputSpeed = document.getElementById("ideNum").value;
    if (inputSpeed.match(/^[1-9]\d/)) { sortSpeed = inputSpeed };
	
    setTimeout(timeout, sortSpeed);	
	
    function timeout() {
        if (i < len) {
            if (j > i) {
                Li[j].style.backgroundColor = "red";
                if (parseInt(Li[j].title) < parseInt(Li[j - 1].title)) {//li has no innerHTML, so here use title to get the value
                    temp = Li[j];
                    Li[j] = Li[j - 1];
                    Li[j - 1] = temp;
                    Li[j].style.backgroundColor = "#00FF00";
                    content.insertBefore(Li[j], Li[j - 1]);
					j--;
                    setTimeout(timeout, sortSpeed);                  
                } else {
                    j--;
                    Li[j].style.backgroundColor = "#00FF00";
                    setTimeout(timeout, sortSpeed);
                }
            } else { //这个else语句很关键！！！不考虑这个else的话if只搜索一遍就跳出去了！设置这个else再初始化i和j的值！
                Li[i].style.backgroundColor = "#000";
				i++;               
                j = len - 1;
                setTimeout(timeout, sortSpeed);
            }
        }
    }

}

//refresj
refreshBtn.addEventListener("click", refreshFtn, false);
function refreshFtn(){
	
	location.reload();
}
