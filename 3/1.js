function func1(){
    return "My name is, "+ this.name;
}

var p1 = {
    name : "John"
};

var p2 = {
    name: "Doe"
};

console.log(func1.call(p1));            //calling func1 as p2

function func2(context){
    return "my name: "+ context.name;
}

console.log(func2(p2));