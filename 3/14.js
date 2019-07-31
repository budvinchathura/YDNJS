var myArray = ["fo","bar","baz"];
console.log("length = "+myArray.length);

//both work
console.log(myArray[0]);            //first element
console.log(myArray["2"]);          //third element

//more properties can be added to arrays
//but it is not a good practice 
myArray["a"] = "text";      
console.log(myArray.a);

//this "5" is interpreted as an array index
myArray["5"] = "hello";
console.log(myArray);

myArray[4] = function myfunc(){};
console.log(myArray);
