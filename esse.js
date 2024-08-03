const obj = { name: "John", age: 30, city: "New York" };
const replacer = ['name', 'city'];
const myJSON = JSON.stringify(obj, replacer);
console.log(myJSON);
