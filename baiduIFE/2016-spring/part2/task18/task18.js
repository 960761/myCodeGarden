


/*
Author: xin
Date: 2018.10.12
Description: Stimulate the array
*/

var input = document.getElementById("inputText");

var leftIn = document.getElementById("inputLeftIn");
var rightIn = document.getElementById("inputRightIn");
var leftOut = document.getElementById("inputLeftOut");
var rightOut = document.getElementById("inputRightOut");

var content = document.getElementById("content");

var inputVal = "";

//input value validate
input.addEventListener("blur", inputBlur, false);

function inputBlur(e){
  var val = e.target.value;
  
  if( !(/^[0-9]+$/.test(val)) ){
    alert("please input integer!");
	e.target.value = "";
  }else{
    inputVal = e.target.value;
  }
}

//left in
leftIn.addEventListener("click", leftInFtn, false);

function leftInFtn(){
    if(inputVal){
	   var ele = document.createElement("li");
	   ele.innerHTML = inputVal;
	   
	   var clr = "background-color:rgb(" + Math.ceil(Math.random(0,255)*255) + "," + Math.ceil(Math.random(0,255)*255) + "," + Math.ceil(Math.random(0,255)*255) + ");";
	   ele.style.cssText = clr;
	   
	   content.insertBefore(ele, content.firstChild);
    }else{
	   alert("please input integer!");
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
   if(inputVal){
	   var ele = document.createElement("li");
	   ele.innerHTML = inputVal;
	   
	   var clr = "background-color:rgb(" + Math.ceil(Math.random(0,255)*255) + "," + Math.ceil(Math.random(0,255)*255) + "," + Math.ceil(Math.random(0,255)*255) + ");";
	   ele.style.cssText = clr;
	   
	   content.appendChild(ele);
   }else{
       alert("please input integer!");
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

// li element click event
content.addEventListener("click", deleteLI, false);
function deleteLI(e){
  if(e.target.nodeName == "LI"){
    alert("This value will be deleted");
	content.removeChild(e.target);
  }
}



