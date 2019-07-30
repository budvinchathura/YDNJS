function func1(num){
    console.log("func1: "+num);
    this.count++;                   //here, "this" does not refer to func1
}

func1.count = 0;                //adds count property to func1 function

var i;

for(i = 0; i<10; i++){
    func1(i);
}

console.log(func1.count);           //still 0

//----------------------------------------------------

function func2(num){
    console.log("func2: "+num);
    func2.counter +=2;              //ok, refers to itself
}

func2.counter = 0;

for(i = 0;i<10;i++){
    func2(i);
}

console.log(func2.counter);         //20

//---------------------------------------------------------------

function func3(num){
    console.log("func3: "+num);
    this.c+=3;                  //"this" refers to function itself only because of the binding
}

func3.c = 0;
for(i = 0;i<10;i++){
    func3.call(func3,i);            //binds "this" to func3
}

console.log(func3.c);               //30

//-------------------------------------------
this.myVar  = 0;
this.myVar +=999;
console.log(this.myVar);            //999
console.log(this === exports);          //true,nodeJS this in global scope refers to "modules"
//--------------------------------------------

function func4(){
    var x = 10;
    func5();
}

function func5(){
    console.log(this.x);            //does not work, "this" does not refer to func4        
}

func4();