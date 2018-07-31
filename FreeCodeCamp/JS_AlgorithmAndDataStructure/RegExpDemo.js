
/*
w3school RegExp link: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
*/

/*
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
*/

let username = "JackOfAllTrades";
let userCheck = /[a-z][a-z]+[0-9]*$/i; 
let result = userCheck.test(username);


/********************************* lookaheads regex *******************************/
/*
The ?=n quantifier matches any string that is followed by a specific string n.
the ?!n quantifier to match any string that is NOT followed by a specific string n.
*/
/*
a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
*/
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

/*
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
Your regex should match "bana12"
Your regex should match "abc123"
Your regex should not match "1234"
Your regex should not match "airplanes"
*/
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

/***************************** reuse pattern with capture group ***************************/
/*
You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. 
You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. 
This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group, \2 to match second group.

The example below matches any word that occurs twice separated by a space:

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

Using the .match() method on a string will return an array with the string it matches, along with its capture group.
https://webcache.googleusercontent.com/search?q=cache:5yFx_t26Ve8J:https://blog.csdn.net/anlidengshiwei/article/details/44679419+&cd=3&hl=en&ct=clnk&gl=us
*/
/*
match numbers that are repeated only three times in a string, each separated by a space.
Your regex should match "42 42 42"
Your regex should not match "101 102 103"
Your regex should not match "42 42 42 42"
*/
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; //the key is ^ and $ to indicate only 3 times, if not ,will match 42 42 42 42, cannot use {3} because there is whitespace between
let result = reRegex.test(repeatNum);

/***************************** Remove Whitespace from Start and End ***************************/
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex,""); 
