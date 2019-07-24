var obj = {
    name: "Hello world",
    age: 10,
    number: "17050k"
};

console.log(obj);
console.log(obj.name);
obj.name = 100;
console.log(obj);
console.log(obj["number"]);             //need "" for "number"
console.log(obj["height"]);             //returns "undefined"
obj["age"] = "no age";
console.log(obj);
var property = "age";
console.log(obj[property]);