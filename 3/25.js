function newSection(){
    console.log("-".repeat(30));
}


function foo(name){
    this.name = name;
}

foo.prototype.showName = function(){
    console.log(this.name);
}


function bar(name,age){
    foo.call(this,name);
    this.age = age;
}
//-----------------------------------------------------------
newSection();

var a1 = new bar("name for a1","age for a1");
// a1.showAge();                                   //error, we have not added showAge to bar.prototype

//-----------------------------------------------------------
newSection();


bar.prototype.showAge = function(){             //adding showAge function
    console.log(this.age);
}

var a2 = new bar("name for a2","age for a2");
a2.showAge();                       //ok, we added showAge prior to this

a1.showAge();                       //now ok, showAge was added

// a1.showName();                  //error, bar.prototype was not linked to foo.prototype so far
// a2.showName();                  //error, bar.prototype was not linked to foo.prototype so far


//-----------------------------------------------------------
newSection();

bar.prototype = Object.create(foo.prototype);       //
a1.showAge();                   //still work, proto of a1 is old bar.prototype
a2.showAge();                   //still work, same reason

var a3 = new bar("name for a3","age for a3");
a3.showName();                  //ok, now bar.prototype has access to methods in foo.prototype
// a3.showAge();                   //error, we changed bar.prototype it no longer has bar.showAge
// a1.showName();                 //error, proto of a1 is old bar.prototype

console.log(Object.getPrototypeOf(a3)===bar.prototype);         //true
console.log(Object.getPrototypeOf(a1)===bar.prototype);         //false, proto of a1 is old bar.prototype
console.log(Object.getPrototypeOf(a2)===bar.prototype);         //false, proto of a1 is old bar.prototype

//-----------------------------------------------------------
newSection();

//manually adding new proto
//not recommended editing proto property
a1.__proto__ = bar.prototype;
a2.__proto__ = bar.prototype;
console.log(Object.getPrototypeOf(a1)===bar.prototype);         //now true        
console.log(Object.getPrototypeOf(a2)===bar.prototype);         //now true

a1.showName();      //working
a2.showName();      //working

// a1.showAge();       //not working because we changed whole bar.prototype prevously, bar.prototype no longer has showAge
// a2.showAge();       //not working because we changed whole bar.prototype prevously, bar.prototype no longer has showAge
// a3.showAge();       //not working because we changed whole bar.prototype prevously, bar.prototype no longer has showAge

//-----------------------------------------------------------
newSection();

//re adding showAge to bar.prototype
bar.prototype.showAge = function(){
    console.log(this.age);
}


//now working!!!!
a1.showAge();
a2.showAge();
a3.showAge();

