/*
Author: xin
Date: 2018.8.20
Description: project demo of FCC JS algorithem and data structure
Link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects
*/

/************************************************************* 01. Palindrome Checker ********************************************************/
/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) 
in order to check for palindromes.

For example:
palindrome("_eye") should return true.
palindrome("A man, a plan, a canal. Panama") should return true.

NOTE:
1. \w not only include word, it also include _, so need to use _ besides \W to delete not-word
2. array reverse() method can change original array, and can also return changed orginal array, 
   so, if arr2 = arr1.reverse(); both arr1 and arr2 are the same reversed array.
*/
function palindrome(str) {

/*** a.traditional way ***/
  /*var strOri = str.replace(/\W+|_+/g,"").toLowerCase();
  var len = strOri.length;
  let i;

  for(i=0;i<Math.floor(len/2);i++){
    if(strOri[i] !== strOri[len-1-i]){
      return false;
    }
  }
  return true;*/

  /*** b.array reverse ***/
  var strOri = str.replace(/\W+|_+/g,"").toLowerCase();
  var strR = strOri.split("").reverse().join("");
  if(strOri == strR )return true;
  else return false;
}



palindrome("not a palindrome");

/************************************************************* 02. Roman Numeral Converter ********************************************************/
/*
Convert the given number into a roman numeral.
All roman numerals answers can refer to:
https://www.mathsisfun.com/roman-numerals.html

for example:
convertToRoman(44) should return "XLIV".
convertToRoman(501) should return "DI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(3999) should return "MMMCMXCIX"

NOTE:
此demo重点不在于如何实现，而在于实现的思路，也即算法上面。
以下两种方法都是使用的分解思路，但是使用的分解因子不一样。
*/
function convertToRoman(num) {

/*** a. traditional way: num = ?*1000+?*100+?*10+? ***/
  let cntThou=0,cntHund=0,cntTen=0;
  let remThou=0,remHund=0,remTen=0;

  //1.get counts of 1000,100,10,1, for examle: 13598
  cntThou = Math.floor(num/1000); // 13
  remThou = num%1000; // 598
  cntHund = Math.floor(remThou/100); //5
  remHund = remThou%100; //98
  cntTen = Math.floor(remHund/10); //9
  remTen = remHund%10; //8

  //num = cntThou*1000 + cntHund*100 + cntTen*10 + remTen;

  //2. get according roman number
  var mapHund = {100:'C', 200:'CC', 300:'CCC', 400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM'};
  var mapTen = {10:'X', 20:'XX', 30:'XXX', 40:'XL',50:'L',60:'LX',70:'LXX',80:'LXXX',90:'XC'};
  var mapOne = {1:'I', 2:'II', 3:'III', 4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX'};
  var mapThou = "M";
  
  var strThou="";
  if(cntThou){
    for(var i=0;i<cntThou;i++){
      strThou += 'M';
    }
  }
  var strHund = cntHund?mapHund[cntHund*100]:'';
  var strTen = cntTen?mapTen[cntTen*10]:'';
  var strOne = remTen?mapOne[remTen]:'';


  return strThou + strHund + strTen + strOne;
  
 /*** b. advanced num = ?*1000+?*900+?*500+.... ***/
  /*var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;*/

}

convertToRoman(2);


/************************************************************* 03. Caesars Cipher ********************************************************/
/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str) { // LBH QVQ VG!

 /*** a. traditioal way ***/
  /*var rlt='';

  for(var i=0;i<str.length;i++){
     var char = str[i];
     var code = str.charCodeAt(i);

     if( /[A-Z]/g.test(char) ){
         if(char <= 'M'){
             code += 13;
         }else{
             code -= 13;
         }
         rlt += String.fromCharCode(code);
         
     }else{
         rlt += char;
     }
  }

  return rlt;*/

/*** b. array way ***/
  function myMap(char){
      if( char>='A' && char<='M' ){
          return String.fromCharCode(char.charCodeAt(0)+13);
      }else if(char>'M' && char<='Z'){
          return String.fromCharCode(char.charCodeAt(0)-13);
      }else{
          return char;
      }
  }
  //console.log(str.split("").map(myMap).join(""));
  return str.split("").map(myMap).join("");
}

// Change the inputs below to test
rot13("LBH QVQ VG!");

/************************************************************* 04. Telephone Number Validator ********************************************************/
/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

please refer to https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
for more test cases.

NOTE:
可以首先进行分解或分类，

/^(1 *)*      (  \d{3}  |  \(555\)  )      [ -]*\d{3}[ -]*\d{4}$/

比如这里，先将前面有 1 的情况去掉，只检测没有1 的情况，这个时候就简化了很多，就是上面的最后一个部分，

其中，可以发现后半部分是相同的，因此分析后可以得出 [ -]*\d{3}[ -]*\d{4}$

但是前面的部分 也即 上面的第二部分 分为两种情况：
有 (555)时，这里的前后括号是同时存在的，所以不可以用\(*\d{3}\)*，因为会出现（555 和 555）这两种情况，所以只能将其作为一个整体\(555\)
没有（）时是另一种情况，因此得到 \d{3}
这两种情况是没有办法写成一种的， 所以这里将这两种进行 并列 |，因此有了 (\d{3}|\(555\))

最后再来分析有1的情况，加上 ^(1 *)* 

这样就得出了最后的表达式。

遇到复杂的正则表达式时，要注意：

第一，学会进行分解；
第二，当无法统一时，注意 | 的使用；
第三，对（），[]这些有固定用法的字符进行检测时要使用转义符；
第四，对正则表达式的判断不可以只思考，要拿尽量多的test case来进行测试。

*/

function telephoneCheck(str) {

  return /^(1 *)*(\d{3}|\(555\))[ -]*\d{3}[ -]*\d{4}$/.test(str);

}

telephoneCheck("555-555-5555");

/************************************************************* 05. Cash Register ********************************************************/
/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument, cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

For example:

["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
should return {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
should return {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}


NOTE:
1.	注意map数据结构的使用；
2.	最关键的是算法逻辑的设计和分析；
3.	注意一些细节的处理，比如sum的取小数点后两位的处理；
*/

function checkCashRegister(price, cash, cid) {
  var rlt={};
  rlt.status = "";
  rlt.change = [];

  var sum = cid.reduce(function(total,arr){return total+parseFloat(arr[1])},0.0).toFixed(2);
  var rem = cash-price;

  if(rem>=0){
    if(rem < sum){
      rlt.status="OPEN";
      var rltArr = doMath(rem, cid);
      var sumNow = rltArr.reduce(function(total,arr){return total+parseFloat(arr[1])},0.0).toFixed(2);

      if(sumNow == rem){
        rlt.change = rltArr;
      }else{
        rlt.status = "INSUFFICIENT_FUNDS";
        rlt.change = [];
      }     
    }else if(rem==sum){
      rlt.status="CLOSED";
      rlt.change = cid;
    }else{
      rlt.status="INSUFFICIENT_FUNDS";
      rlt.change=[];
    }
  }

  return rlt;
}

//this function will change sum, it is not good
 function doMath(sum, change){
     var map={"PENNY":0.01, "NICKEL":0.05, "DIME":0.1, "QUARTER":0.25, "ONE":1, "FIVE":5, "TEN":10, "TWENTY":20, "ONE HUNDRED":100};
     var rlt=[];
     var arr=[];

     for(var i=change.length-1; i>=0; i--){
        arr = change[i];
        var total = parseFloat(arr[1]).toFixed(2);
        var unit = map[arr[0]];
        sum = parseFloat(sum).toFixed(2);// !!! this is important

		//first way
        if( total>0 && sum>=unit){
            if(sum >= total){
              rlt.push(arr);
              sum -= total;
            }else{
              var cnt=Math.floor(sum/unit);
              var tempArr = [arr[0],cnt*unit];
              rlt.push(tempArr);
              sum -= cnt*unit;
            }
        }else{
          continue;
        }
          
		//second way, continually reduce 
		/*var value = 0;
		while (total > 0 && sum >= unit) {
		  sum -= unit;
		  total -= unit;
		  value += unit;
		  sum = Math.round(sum * 100) / 100; // !!! this is important
		}
		if (value > 0) {
			rlt.push([ arr[0], value ]);
		}*/

		
     }//end for
    console.log(rlt);
  return rlt;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
