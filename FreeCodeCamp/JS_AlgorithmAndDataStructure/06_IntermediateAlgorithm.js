/*
Intermediate Algorithm scripting
Author: xin
Date: 2018.8.9
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/
*/

/******************************************* 01. Sum All Numbers in a Range*****************************************/
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  let sum = 0;
  let i;
  
  /*** a. basic way ***/
  var arrR = arr.sort(function(a,b){return a-b;}); 
  for(i=arrR[0];i<=arrR[1];i++){
    sum += i;
  }
  
  /*** b. advanced way***/
  for(i=Math.min(...arr);i<=Math.max(...arr);i++){ // can also use Math.min(arr[0],arr[1]), xx
    sum += i;
  }
 
  return sum;
}

sumAll([5, 4]);

/******************************************* 02. Diff Two Arrays *****************************************/
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

There are two solutions:
1. first get each sub array which do not include all-have elements, then add these two subarrays, like a, b, c,
2. first concat two arrays  to get one, then use filter to delete some elements, like d.

NOTE: 
array can also use includes() method(ES6)
both array and string can use both includes() and indexOf() method
Make best use of filter()
*/

function diffArray(arr1, arr2) {

  /*** a. traditional way ***/
  var arr1R = arr1.slice();//NOTE: not change original array
  var arr2R = arr2.slice();

  var len = arr1.length;
  var i;

  for(i=0; i<len; i++){
    var index = arr2R.indexOf(arr1R[i]);
    if(index >= 0){ //NOTE: cannot delete from array, because this will cause length and the index of element to change, will not know what para to use in splice
      delete arr1R[i]; // same as arr1R[i] = "";
      delete arr2R[index];
    }
  }

  //return (arr1R.concat(arr2R)).filter(Boolean); // same as function(item){return item}, will filter out '0', not safe
  return (arr1R.concat(arr2R)).filter(el=>el!=""); // more safe
  
  /*** b. function way ***/
  var newArr = [];

  function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
    for (var i=0;i<first.length;i++) {
    if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
       }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr; 

   /*** c. advanced way ***/		
  return arr1
      .filter(el => !arr2.includes(el))//NOTE: can also change to indexOf
      .concat(
        arr2.filter(el => !arr1.includes(el))
      ) 
	  
  /*return arr1
      .filter(el => arr2.indexOf(el)<0)
      .concat(
        arr2.filter(el => arr1.indexOf(el)<0)
      )*/
  
  /*** d. advanced way ***/
  return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
		
}

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);

/******************************************* 03. Seek and Destroy *****************************************/
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

NOTE:
In the latest ES6, 
array new method Array.from(obj): crate an array from an object.

array new method arr.includes(str) : sames as string.includes(x)
use of filter()
*/
function destroyer(arr) {
  //var arr2 = Array.from(arguments);// !!! NOTE: arr2=[[1,2,3,1,2,3],2,3]; NOT [1,2,3,1,2,3,2,3]
  var arr2 = Array.from(arguments).slice(1); // this one is more clear, delete the first one ele which is arr
  return arr.filter(el=> !arr2.includes(el));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/******************************************* 04. Wherefore art thou *****************************************/
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, 
if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
*/

function whatIsInAName(collection, source) {
  var arr = [];
  let i;

  /*** a.basic ***/
  for(i=0;i<collection.length;i++){

    var hasP = true;// if have all the property in source
    var equal = true; // if all the property value equal

	//to test if have all the property in source
    for(let prop in source){
      if( !collection[i].hasOwnProperty(prop) ){
        hasP = false;
        break;
      }
    }

	//if have all, then to test if all the property values are same
    if(hasP){
      for(let p in source){
        if(!(collection[i][p] == source[p])){
          equal = false;
          break;
        }
      }
      if(equal){
        arr.push(collection[i]);
      }    
    }

  }//end collection iteration
  return arr;
  
  /*** b. advanced: filter ***/
  
  /*var srcKeys = Object.keys(source);
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });*/
  
  return collection.filter(function (obj) {
    for(var prop in source) {
      if(!obj.hasOwnProperty(prop) || obj[prop] !== source[prop]) {
        return false;
      }
    }
    return true;
  });
  
  /*** c. advanced: filter+every ***/
  var srcKeys = Object.keys(source);
  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });//every
  });//filter 

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/******************************************* 05. Spinal Tap Case *****************************************/
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things") should return "all-the-small-things"

NOTE:
1. pay attention to capture groups , capture groups use /(pattern)/g, use $1,... to get matched groups;
2. split(/(pattern)/g) is NOT same with split(/pattern/g), split(/(?:pattern)/g) is SAME with split.(/pattern/g)
3. pay attention to replace and split+join
4. pay attention to lookahead 
5. More on RegExp usage: 
http://www.runoob.com/regexp/regexp-metachar.html
*/
function spinalCase(str) {
  /*** a. traditional way ***/
  var str1 = str.replace(str.charAt(0),str.charAt(0).toUpperCase());//convert the first char of first letter to capital in order to match
  var arr= str1.match(/\W\w+|[A-Z][a-z]*/g);
 
  var a = arr.map(el=>el.replace(/\W/g,""));//delete non-word such as -,_, ,and so on
  //arr.forEach(function(item,index,arr){arr[index] = item.replace(/\W/g,"");}); //NOTE: forEach cannot change original unless you use index to change

  return a.join("-").toLowerCase();
  
  /*** b. advanced ***/
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); //NOTE: very very important, use $1,$2,...$9 to get capture groups
  // Replace space and underscore with -
  return str.replace(/\s+|_+/g, '-').toLowerCase(); //NOTE: / |_/g is OK, but the first one is better and safe
  //return str.toLowerCase().replace(/(?:_| )+/g, '-'); //this also works. NOTE:  !!! /(_)/g is different fromo /_/g, (?:_| ) is same as [_| ]
  
  /*** c. advanced ***/
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();// lookahead: ?=
  //NOTE: cannot use replace instead split+join, if str.replace(/\s|_|(?=[A-Z])/g,'-') for "This Is", will be "-This--Is" because 'Is' fits \s and ?=[A-Z] two pattern
}

spinalCase('This Is Spinal Tap');

/******************************************* 06. Pig Latin *****************************************/
/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
If a word has no vowels, add "ay" to the end.
Input strings are guaranteed to be English words in all lowercase.
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("eight") should return "eightway".
translatePigLatin("ctt") should return "cttay".
*/
function translatePigLatin(str) {
  var index = str.indexOf(str.match(/[aeiou]/i));

  if(index > 0){
    return str.slice(index) + str.slice(0,index) + "ay";
  }else if(index == 0){
    return str+"way";
  }else{
    return str+"ay";
  }
}

translatePigLatin("ctt");

/******************************************* 07. Search and Replace *****************************************/
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note
Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
*/
function myReplace(str, before, after) {
  var afterP = after;
  if( (/^[A-Z]/).test(before) ){
    afterP = after.replace(after.charAt(0),after.charAt(0).toUpperCase());
  }
  return str.replace(before,afterP);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/******************************************* 08. DNA Pairing *****************************************/
/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
*/


function pairElement(str) {

/*** a.traditional method ***/
  var rlt=[];
  let i;

  for(i=0; i<str.length; i++){
    switch(str.charAt(i)){
      case 'A':
        rlt.push(['A','T']);
        break;
      case 'T':
        rlt.push(['T','A']);
        break;
      case 'C':
        rlt.push(['C','G']);
        break;
      case 'G':
        rlt.push(['G','C']);
        break;
      default: break;
    }
  }

  return rlt;
  
  /*** b.map datastructure method ***/
      //define a map object with all pair possibilities 
      var map = {T:'A', A:'T', G:'C', C:'G'};
      strArr = str.split('');
	  
      //replace each Array item with a 2d Array using map
      for (var i=0;i<strArr.length;i++){
        strArr[i]=[strArr[i], map[strArr[i]]];
      }
     return strArr; 

  /*** c. lookup table + map ***/
     var map = {T:'A', A:'T', G:'C', C:'G'};
     return str.split("").map(function(arr){
       return arr = [arr[0],(map[arr[0]])];
     })
	 
}

// test here
pairElement("GCG");

/******************************************* 09. Missing letters *****************************************/
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
NOTE: 
var strR;
console.log(strR); // will print 'undefined'
consol.log(strR+'c'); // will print 'undefinedc'
*/
function fearNotLetter(str) {

  /*** a. string way ***/
  var strR, rlt='';
  let i;
  
  for(i=str.charCodeAt(0); i<=str.charCodeAt(str.length-1); i++ ){
    if( str.indexOf(String.fromCharCode(i)) < 0 ){
		//strR = String.fromCharCode(i); // if can ensure only one is missing,  this can be OK
        rlt += String.fromCharCode(i);
        strR = rlt;
    }
  }

  return strR;
  
  /*** b. array way ***/
  var strArr = str.split("");
  var strArrWhole = [];
  let i;

  for(i=str.charCodeAt(0); i<=str.charCodeAt(str.length-1); i++ ){
     strArrWhole.push(String.fromCharCode(i));
  }

  var rlt=strArrWhole.filter(el=>strArr.indexOf(el)<0).join("");
 
  return rlt.length==0?undefined:rlt;
}

fearNotLetter("ad");

/******************************************* 10. Sorted Union *****************************************/
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
NOTE: based on the first array to test if duplicate, duplicate value deleted from other than first array
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4], NOT[5,4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
NOTE: use indexOf(item) != lastIndexOf(item) to test if have duplicate value
*/
function uniteUnique(arr) {
  /*** a.traditional ***/
  // Creates an empty array to store our final result.
  var finalArray = [];
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;

  
  /*** b.advanced ***/
  var arr0 = arguments[0];//arr is arguments[0]
  var arrR = arr0.concat();//can also arrR = arr.slice();

  for(var i=1;i<arguments.length;i++){//NOTE: because the first arguments is first time value, so here i=1 has same effect as i=0,but i=0 will have many times no-effect run
    arrR = arrR.concat( arguments[i].filter(function(item){return arr0.indexOf(item)<0}) );
  }

  return arrR;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/******************************************* 11. Convert HTML Entities *****************************************/
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
& &amp;
< &lt;
> &gt;
" &quot;
' &apos;
*/
function convertHTML(str) {

  /*** a. simple replace ***/
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
  
  /*** b. traditional method ***/
  var temp = str.split('');
      for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
          case '<':
            temp[i] = '&lt;';
            break;
          case '&':
            temp[i] = '&amp;';
            break;
          case '>':
            temp[i] = '&gt;';
            break;
          case '"':
            temp[i] = '&quot;';
            break;
          case "'":
            temp[i] = "&apos;";
            break;
        }
      }
  temp = temp.join('');
  return temp;
  
  /*** c. split+map+lookup ***/
 // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '\"':'&quot;',
        '\'':"&apos;"
      };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
        return htmlEntities[entity] || entity;//if first is undefined or null or "", will return second value;
      }).join(''); 
	  
  /*** d. advanced replace ***/
  return str.replace(/['&<>"]/g,function(match,pos,originalText){
      switch(match){
        case "'":
          return "&apos;";
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"': //NOTE: use ' to "
          return "&quot;";
        default:
          break;
      }
  });
}

convertHTML("Dolce & Gabbana");

/******************************************* 12. Sum All Odd Fibonacci Numbers *****************************************/
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
function sumFibs(num) {

  /*** a.traditional ***/
  var arr=[];
  let i;
  
  if(num > 1){
    arr[0] = arr[1] = 1;

    for(i=2;;i++){
    var temp = arr[i-2]+arr[i-1];
		if(temp>num){
		  break;
		}else{
		  arr[i] = temp;
		}
    }
    return arr.filter(function(item){return item%2}).reduce(function(total,itm){return total+itm});
   }else{
    return 1;
   }
   
   /*** b. advanced reduce ***/
     // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }
  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr; //NOTE: integrate filter and reduce
      else return prev;
    });

  return res;

}

sumFibs(4);

/******************************************* 13. Sum All Primes *****************************************/
/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
*/
function sumPrimes(num) {
  var arr=[];
  for(var j=2;j<=num;j++){
    arr.push(j);
  }

  function myReduce(prev, curr){
    for(var i=2;i<curr;i++){
      if(curr%i == 0){
        return prev;
      }
    }

    return prev+curr;
  }

  //can also use filter + simple reduce
  /*function myf(item){
    for(var i=2;i<item;i++){
      if(item%i == 0){
        return false;
      }
    }

    return true;
  }*/


  return arr.reduce(myReduce);
}

sumPrimes(10);


/******************************************* 14. Smallest Common Multiple *****************************************/
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.	
The range will be an array of two numbers that will not necessarily be in numerical order.
寻找一组数字的最小公倍数
*/
function smallestCommons(arr) {

 /*** a. traditional way ***/
  let i;
  var arrR=[];

  //get the array 
  for(i=Math.max(...arr);i>=Math.min(...arr);i--){
    arrR.push(i);
  }
 
  //get the lcm
  var maxItem = arrR[0]*arrR[1];
  var temp;
  for(i=1;;i++){ 
    temp = maxItem*i;//the lcm must be multiple of max number,so check multiples of max number can even divide every ele of the array elements
    //console.log(temp);
    if( arrR.every(el=> temp%el==0) ){
      return temp;
    }
  }
  
  /*** b. iterator + Euclidean algorithm ***/
  //use Euclidean algorithm to get the LCM of two numbers;
  //use the LCM of two numbers replace these to numbers to iterate throught the whole range of number to get the final LCM of whole array 
  //for example: [1,2,3,4,5], first get 2 as [1,2] LCM, then problem change to LCM of [2,3,4,5] =>LCM of [6,4,5] => LCM of [12,5] => 60
  
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  let smallestCommon = lcm(min, min + 1);

  while(min < max) {
    min++;
    smallestCommon = lcm(smallestCommon, min);
  }

  return smallestCommon;
  
  /**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
function gcd(a, b) {
  while (b > 0) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}

/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
function lcm(a, b) {
  return (a * b / gcd(a, b));
}
/*** End of b. method ***/
  
}


smallestCommons([23,18]);

/******************************************* 15. Drop it *****************************************/
/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return []

NOTE:
  //find() returns the value of the first element in an array that pass a test
  //findIndex() returns the index of the first element in an array that pass a test
  //arr.filter(Boolean) is NOT same as arr.filter(el=>el!=="")
*/
function dropElements(arr, func) {

  /*** a. basic way ***/
  for(var i=0; i<arr.length; i++){
    if( !func(arr[i]) ){
        delete arr[i];
    }else{
      break;
    }
  }
  return arr.filter(el=>el!==""); //NOTE: cannot use filter(Boolean); this will pass ele 0
  
  /*** b. array.shift() ***/
  let len = arr.length;//NOTE:the array is changing ,so shoule save the original length to a variable
  let i;
  for(i=0;i<len;i++){
    if(func(arr[0])){//NOTE: here is arr[0], not arr[i]
      break;
    }else{
      arr.shift(arr[0]);
    }
  }
  return arr;
  
  /*** c. advanced array.shift() ***/
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
  
  /*** d. array.findIndex() ***/
  let index = arr.findIndex(func);
  if(index<0){
    return [];
  }else{
    return arr.slice(index);
  }
  
  //return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length); // integrated findIndex() way
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});

/******************************************* 16. Steamroller *****************************************/
/*
Flatten a nested array. You must account for varying levels of nesting.
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]

NOTE: 
spread operator: ... It can flatten one, only one layer array
if arr=[1,2,[3,4]]; then [].concat(...arr); return [1,2,3,4]
if arr=[1,2,[3,[4,5]]]; then [].concat(...ar); return [1,2,3,[4,5]];

arr.toString();
no matter how many levels, will return flattened string
[1,2[3,[4,5]]].toString() return "1,2,3,4,5"
[1,[],2].toString() return "1,,2"
[1,{a:3,b:4},2].toString() return "1,[object,Object],2"

use Array.isArray(arr) to test whether is an array
*/


function steamrollArray(arr) {

/*** a. traditional recursicve递归 ***/
  var rlt=[];
  
  for(var j=0;j<arr.length;j++){
    flatten(rlt,arr[j]);
  }
  return rlt;

  function flatten(arr,cur){
    if(cur instanceof Array){//NOTE: cur instanceof Array  has same effect as  Array.isArray(cur);
      for(var i=0; i<cur.length;i++){
        flatten(arr,cur[i]);
      }
    }else{
      arr.push(cur);
    }
  }
  
 /*** b. recursive advanced ***/
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      arg.forEach(flatten);
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
  
/*** c. concat+some+recursive ***/
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  
/*** d. toString() ***/
//this method is not safe, if object is not empty object, will wrong, if number is float, will wrong
  return arr.toString()
    .replace(/,+/g, ',')      // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}

steamrollArray([1, [2], [3, [[4]]]]);


/******************************************* 17. Binary Agents *****************************************/
/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
NOTE:
String.fromCharCode(x) can take a single or a series code, NOT array, but, in ES6, by ...array can take an array as code
*/
function binaryAgent(str) {

  /*** a. fromCharCode(single code) ***/
  var arr = str.split(" ");
  return arr.map(function(item){return String.fromCharCode(parseInt(item,2))}).join("");
  
  /*** b. fromCharCode(...array) ***/
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
}

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");// return "I love FreeCodeCamp!"

/******************************************* 18. Everything Be True *****************************************/
/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
*/
function truthCheck(collection, pre) {

  /*** a. ***/
  return collection.every( function(item){ return item.hasOwnProperty(pre)&&Boolean(item[pre])} ); //NOTE: do not forget hasOwnProperty check
  
  /*** b. ***/
  return collection.every( boj => obj[pre] );
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/******************************************* 19. Arguments Optional *****************************************/
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
addTogether(2)(3) should return 5.

isNaN(item) will use item.toString() and  then check, so here use typeof xx !== number to test if a number
*/
function addTogether() {
  let len = arguments.length;

  if(len == 2){
    if( typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number' ) return undefined;
    else return arguments[0]+arguments[1];
  }else if(len == 1){
    let a = arguments[0];
    if( typeof a !== 'number'){
      return undefined;
    }else{ 	
	  /*return function(b){
         if( typeof b !== 'number'){
           return undefined;
         }else{
           return b + a;
         }       
      }*/ //NOTE: has same effect to the below code
      return function(){
        var b = arguments[0];
         if( typeof b !== 'number'){
           return undefined;
         }else{
           return b + a;
         }       
      }//end return function
    }

  }// end else length==1

  return false;
}

addTogether(2)([3]);

/******************************************* 20. Make a Person *****************************************/
/*
Fill in the object constructor with the following methods below:
getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
Object.keys(bob).length should return 6.
bob.firstName should return undefined.
bob.lastName should return undefined.

NOTE: 
according to the requirements:
the object have only 6 property, so cannot this.firstAndLast = fristAndLast;
but need a variable to save the full name ,
so let a variable fullName to save the full name, but not as object property
*/
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

/******************************************* 21. Map the Debris *****************************************/
/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 
  /*** a.map ***/
  function myMap(obj){
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var a = 2 * Math.PI;
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  }

  return arr.map(myMap);
  
  /*** b.forEach ***/
  arr.forEach(function(item) {
    var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
    delete item.avgAlt;
    item.orbitalPeriod = tmp;
  });
  return arr;
  
  /*** c.use for...in to array ***/
  //NOTE: array is also kind of object, so can use for...in to iterate key of array, keys of array is their index
  for(var prop in arr) {
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
    delete arr[prop].avgAlt;
    arr[prop].orbitalPeriod = orbitalPer;
  }
  return arr;
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

/******************************************************************** END ********************************************************************/
