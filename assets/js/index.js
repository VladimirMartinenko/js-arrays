const number1 = [1, 2, 3];
const number2 = [4, 5, 6];
const number3 = number1.concat(number2);
number1.reverse();
number1.push(4, 5, 6);
number1.unshift(4, 5, 6);

const str = ["js", "css", "jq"];
const deleteStart = str.shift();
const deleteEnd = str.pop();

const arr = [1, 2, 3, 4, 5];
const start = arr.slice(0, 3);
const end = arr.slice(3);

const arrNumber = [1, 2, 3, 4, 5];
arrNumber.splice(1, 2);
const arrNumber1 = [1, 2, 3, 4, 5];
const newArr = arrNumber1.splice(1, 3);
const arrNumber2 = [1, 2, 3, 4, 5];
arrNumber2.splice(3, 0, "a", "b", "c");
const arrNumber3 = [1, 2, 3, 4, 5];
arrNumber3.splice(1, 0, "a", "b");
arrNumber3.splice(6, 0, "c");
arrNumber3.splice(8, 0, "e");

const arrSort = [3, 4, 1, 2, 7];
arrSort.sort();

const names = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovina", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];

names.forEach(callback);
function callback(user,index,arr){
  console.log(`${user.firstName} ${user.lastName} является ${user.gender} и ему сейчас ${user.age} лет`);
};

const users = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovina", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];

const newArrey = users.map(callback);
function callback(user,index,arr) {
user.telefonNumber=555;
return user;
};

const users1 = [
  { firstName: "Test", lastName: "Testovich", age: 27, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovina", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
  { firstName: "Undefined", lastName: "Undefinovich", age: 99 },
  { firstName: "Null", lastName: "Nullovich", gender: "male" },
];