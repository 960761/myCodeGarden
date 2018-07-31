/*
NOTE: for in use to iterate objects keys
We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object 
and return the number of users whose online property is set to true.
*/

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  var cnt = 0;
  for(let user in obj){
    console.log(user);
    if(obj[user]["online"]) cnt++;
	//right: obj[user].online;
	//wrong: user.online;
	//wrong: obj.user.online;
	//NOTE: by console.log(user), we can see that this 'user' is just a property name of users: Alan, Jeff, Sarah, Ryan, not the whole subobject, 
	//so can only use [] to get the subobject
  }
  return cnt;
  // change code above this line
}

console.log(countOnline(users));
