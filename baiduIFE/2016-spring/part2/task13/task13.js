/*
Author: xin
Date: 2018.9.20
*/
document.getElementById("button").onclick = function(){
    var inp = document.getElementById("aqi-input");
	  var out = document.getElementById("aqi-display");
	  out.innerText = inp.value;
};
