
/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/

principles of functional programming:
1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.
2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
*/

/********************************************** 01_principle of functional programming **********************************************/

/************************  old and bad function   *****************************/
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
function add (bookName) { 
  return bookList.push(bookName); // wrong and bad
}

/* This function should remove a book from the list and return the list */
function remove (bookName) {
  if (bookList.indexOf(bookName) >= 0) {  
    return bookList.splice(0, 1, bookName); // wrong and bad
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

/************************  refractor the function  *****************************/
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bList,bookName) {
  var rlt = [...bList]; //NOTE: cannot use rlt = bList.slice() to copy, because, computer cannot know bList is array, cannot use slice() or concat()
  //var rlt = JSON.parse(JSON.stringify(bookList)); //this can also work
  rlt.push(bookName); // return new array length not new array
  return rlt;
}

function remove (bList, bookName) {
  var rlt = [...bList];
  var index = rlt.indexOf(bookName);
  if (index >= 0) {  
    rlt.splice(index, 1);// return removed elements, rlt has been changed
    return rlt;  
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

/********************************************** 02_define your own map() function **********************************************/
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  let i,len=this.length;
  for(i=0;i<len;i++){
    newArray.push(callback(this[i]));
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

/********************************************** 03_define your own filter() function **********************************************/
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  let i, len=this.length;
  for(i=0;i<len;i++){
    if(callback(this[i])){
      newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

/********************************************** 04_Use the filter Method to Extract Data from an Array **********************************************/
/*
The variable watchList holds an array of objects with information on several movies. 
Use a combination of filter and map to return a new array of objects with only title and rating keys, 
but where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object 
and you may want to convert them into numbers to perform mathematical operations on them.
*/
watchList = [{xxx},{xxx},{xxx}];

function myFilter(item){
  return (parseFloat(item.imdbRating))>=8.0;
}
function myMap(item){
  filteredList.push({title: item["Title"],rating: item["imdbRating"]});
}

var filteredList = [];
watchList.filter(myFilter).map(myMap);

/********************************************** 05_Use the reduce Method to Analyze Data **********************************************/
/*
Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.  
Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
*/
watchList = [{xxx},{xxx},{xxx}];
var averageRating;

function myFilter(item){
  return item.Director == "Christopher Nolan";
}
function myAvg(total, item){
  return (total+ parseFloat(item.imdbRating));
}

var tmp = watchList.filter(myFilter);
averageRating = (tmp.reduce(myAvg,0.0))/tmp.length;

console.log(averageRating); 

/********************************************** 06_Sort an Array using the sort Method **********************************************/
//numerical increace, 1,2,...,9
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

//numerical decreace, 9,8,...,1,0
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return b - a;
  });
}

//alpha increase, a,b,...,z(default)
function alphabeticalOrder(arr) {
  return arr.sort();
}
//or
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a > b;
  });
}

//alpha decrease, z,y,...,b,a
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
/********************************************** 07_Apply Functional Programming to Convert Strings to URL Slugs **********************************************/
/*
Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces
*/
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  var rlt = title;
  return rlt.trim().split(/\W+/g).join("-").toLowerCase();//NOTE: use trim() to make sure not any whitespace at head and end.
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
