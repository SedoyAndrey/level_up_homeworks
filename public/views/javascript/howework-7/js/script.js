 'use strict'

//var user = {
//	name: 'Vasa',
//	surname: 'Petrov'
//}
//
//var name = ['Serg'];
//
//console.log(delete user.name);

//------------------------------

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false

//---------------------------------
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var sum = 0;
for (var name in salaries) {
  sum += salaries[name];
}

alert( sum );
//----------------------------------
