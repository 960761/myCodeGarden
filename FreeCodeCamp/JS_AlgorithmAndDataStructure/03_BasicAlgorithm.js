
//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/

/************************************** 01-reverse a string **************************************/
function reverseString(str) {
  var strArr = str.split("");
  
  /*** a, basic method ***/
  /*let i;
  let len = strArr.length;
  for(i=0; i<len/2; i++){
    var temp;
    temp = strArr[i];
    strArr[i] = strArr[len-1-i];
    strArr[len-1-i] = temp;
  }
  str = strArr.join("");*/
  
  /*** b, array method ***/
  str = strArr.reverse().join("");
  
  return str;
}

reverseString("hello");

/************************************** 02-Factorialize a Number **************************************/
function factorialize(num) {
  if(num == 0) return 1;
  if(num > 0) return num*factorialize(num-1);
}

factorialize(5);

/************************************** 03-Find the Longest Word in a String **************************************/
function findLongestWordLength(str) {
  var arr = str.split(" ");
  let len = arr.length;
  let i;
  var rlt=arr[0].length;

  for(i=0;i<len;i++){
    if(arr[i].length > rlt){
        rlt = arr[i].length;
    }
  }
  return rlt;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/************************************** 04-Return Largest Numbers in Arrays **************************************/
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/
//if only want the max number ,then ES6 can use this:
//var a = Math.max(...arr[0],...arr[1],...arr[2],...arr[3]);

function largestOfFour(arr) {
  let len = arr.length;
  let i,j,tmp;
  let maxArr = [];

  /*** a, Traditional method ***/
  for(i=0;i<len;i++){
    tmp=arr[i][0];
    for(j=0;j<arr[i].length;j++){
      if(arr[i][j] > tmp){
        tmp = arr[i][j];
      }
    }

    maxArr[i] = tmp;
  }
  
  /*** b, Math.max cannot accept array, but can use apply to make it accept array ***/
  /*for(i=0;i<len;i++){
    maxArr[i] = Math.max.apply(Math, arr[i]); // Math.max(arr[i]) is wrong
  }*/
  
  /*** c, in ES6, this will be better ***/
  /*for(i=0;i<len;i++){
    maxArr[i] = Math.max(...arr[i]);
  }*/

  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/************************************** 05-Confirm the Ending **************************************/
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
*/
function confirmEnding(str, target) {
  let len1 = str.length, len2 = target.length;

  if(len2 > 0){
    var end = str.slice(len1-len2);//for slice, if no 2nd para, it will slice until the end, NOTE: the start is len2-len1, not len2-len1-1
    if(end == target) return true;
    else return false;
  }
}

confirmEnding("Bastian", "en");

/************************************** 06-Finders Keepers **************************************/
/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  var arrR = arr.filter(func);
  if (arrR.length == 0) return undefined;
  else return arrR[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/************************************** 07-Boo Who:If boolean primitive **************************************/
/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
booWho("true") should return false.
booWho("false") should return false.
*/

function booWho(bool) {
  /*** a. basid method***/
  /*if(bool === true || bool === false){
    return true;
  }else {
    return false;
  }*/
  
  /*** b. better method ***/
  return typeof bool === "boolean";
}

booWho(null);

/************************************** 08-Capitalize first letter **************************************/
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/
function titleCase(str) {
  var arr = (str.toLowerCase()).split(" ");
  let len = arr.length;
  let i;
  var rlt="";

  /*** a.traditional method ***/
  /*for(i=0;i<len;i++){
    var charFirst = arr[i].charCodeAt(0);
    var charFirstC = String.fromCharCode(charFirst-32);
    arr[i] = charFirstC + arr[i].slice(1);
  }*/

   /*** b. single letter can also use toUpperCase() ***/
  /*for(i=0;i<len;i++){
    var charFirstC = arr[i].charAt(0).toUpperCase();
    arr[i] = charFirstC + arr[i].slice(1);
  }

  rlt = arr.join(" ");
  return rlt;*/

  /*** c.advanced method ***/
  /*
	/(^|\s)\S/g === /^\S|\s\S/g
	include 2 cases:
	for example: you are the dog
	1. ^\S non-whitespace characters at the beginning of the string, is "y" in "you"
	2. \s\S  non-whitespace characters that after any whitespace character , are "a" in "are", "t" in "the", "d" in "dog"
  */
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("i'm the little tea pot");

/************************************** 09-Slice and Splice **************************************/
/*
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  var arrR = arr2.slice(0);//NOTE: use this or arr2.concat() to deep copy, if use arrR = arr2, when one changes, the other will also change
  
  /*** a,traditional method ***/
  /*for(var i=0;i<arr1.length;i++){
    arrR.splice(n+i,0,arr1[i]);
  }*/
  
  /*** b. for ES6 ***/
  arrR.splice(n,0,...arr1); //splice cannot accept array, 
  return arrR;
}

frankenSplice([1, 2, 3], [4, 5], 1);

/************************************** 10-delete falsy value **************************************/
/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {

  /*** WRONG ***/
  //NOTE: the following is wrong, because 
  //1.array length is changing, as you delete element from arr, the lenght has changed
  //2. set element to "" cannot delete it. for[7, "ate", "", false, 9], the result will be  [7,ate,,,9]
  /*for(var i=0;i<arr.length;i++)
  {
	if(!arr[i]) arr[i] = "";
  }*/
  
  /*** a. traditional ***/
  /*var a=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]) a.push(arr[i]); // arr[i] will automatically use Boolean() to convert anything to boolean value
  }*/

  /*** b. advanced ***/
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

/************************************** 11-Where do I Belong **************************************/
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 
because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
  var rlt = 0;
  
  /*** a.traditional method ***/
  /*
  arr.sort(function(a, b){return a-b} );
  for(var i=0;i<arr.length;i++){
    if(num > arr[i]){
      rlt=i+1;
    }
  }*/

  /*** b.advanced method ***/
  arr.push(num);
  arr.sort(function(a, b){return a-b} );
  rlt= arr.indexOf(num);
  
  return rlt;
}

getIndexToIns([70, 60], 65);

/************************************** 12-Mutations:If one array contains characters in another array **************************************/
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
["hello", "Hello"], should return true
["Alien", "line"], should return true
*/
function mutation(arr) {
  let len = arr[1].length;
  let i;

  //NOTE: all string methods will not change the orginal string ,so after arr[0].toLowerCase(), arr[0] remains unchanged, you shoud use reault value
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();

  /*** a. string way ***/
  /*for(i=0; i<len; i++){
    if( !str1.includes(str2.charAt(i)) ) {
      return false;}
  }*/

  /*** b. array way ***/
  var arr1 = str1.split("");
  for(i=0; i<len; i++){
    if( arr1.indexOf(str2.charAt(i)) == -1 ) return false;
  }

  return true;
}

mutation(["Hello", "hey"]);

/************************************** 13-Chunky Monkey **************************************/
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

NOTE: 
splice(start, length) will change original array and return removed eles as new array, 
slice(start,end) will NOT change orginal array and return removed eles as a new array.
for example: 
arr= [a,b,c,d];
rlt = arr.splice(0,2);
arr will change to [c,d], and rlt will be [a,b].

if 
arr= [a,b,c,d];
rlt.arr.slice(0,3); //not include end, so here is 3 instead of 2
arr will be [a,b,c,d], and rlt will be [a,b].

*/
function chunkArrayInGroups(arr, size) {
  let cnt, reminder;
  let i;
  var arrR = [];

  cnt = Math.floor(arr.length/size);//NOTE: should floor, otherwise, 5/2 = 2.5, wrong
  reminder = arr.length%size;
  console.log(cnt);

  for(i=0; i< cnt; i++){
    arrR.push(arr.splice(0,size));
  }
  if(reminder){
    arrR.push(arr);
  }

  return arrR;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);

/************************************************************* End *****************************************************************/
