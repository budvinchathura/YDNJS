// coercion
// coercion always result in one of scalar primitives

var a = 42;
var b = a + '';         //implicit coercion
var c = String(a);      //explicit coercion


console.log(typeof a);      //number
console.log(typeof b);      //string
console.log(typeof c);      //string

var d = new String(a);      //this is not coercion, calls String constructor
console.log(typeof d);      //object

//this is what happens in implicit coercion
var e = a.toString();
console.log(typeof e);      //string
console.log(b === e);

//same for arrays
var arr = [1,2,3];
var arrStr = arr +'';
var arrStr2 = arr.toString();
console.log(arrStr,arrStr2);        //true
console.log(typeof arrStr);         //string
console.log(typeof arrStr2);        //string
console.log(arrStr === arrStr2);


//we can customize implicit string coercion
var customObj = {
    name: 'John',
    toString : function(){
        return this.name;
    }
};

var strOfObj = customObj + '';      //toString() is called in implicit string coercion
console.log(strOfObj);              //John



//JSON.stringify

console.log(JSON.stringify(44));
console.log(JSON.stringify("44"));
console.log(JSON.stringify('text'));
console.log(JSON.stringify(null));

//following are not JSON safe
//return undefined
console.log(JSON.stringify(undefined));
console.log(JSON.stringify(function(){return 10;}));
console.log(JSON.stringify(Symbol('abc')));

//JSON unsafe elements are replaced by 'null'
var mixedArr = [34,'some text',function(){},{a:10,b:20},Symbol('mno')];
console.log(JSON.stringify(mixedArr));

//JSON unsafe properties of an object are eliminated
console.log(JSON.stringify({a:30,b:function(){},c:'textvalue'}));


//JSON.stringify actually calls .toJSON function of the object
//then stringify whatever the value comes from to.JSON function
//toJSON need not to return a string, it should return a JSON safe object of any type
var customObj2 = {
    a:10,
    b:function(){},
    c:Symbol('555'),
    toJSON:function(){
        return {a:this.a,b:'a function',c:'a symbol'};
    }
};

console.log(JSON.stringify(customObj2));

var customObj3 = {
    a:10,
    b:20,
    c:30
};
//take only b,c properties
console.log(JSON.stringify(customObj3,['b','c']));

//filter property c
console.log(JSON.stringify(customObj3,function(key,value){
    //filtering c
    if(key === 'c'){
        return undefined;
    }else{
        return value;        
    }
}));


//pretty print

console.log(JSON.stringify(customObj3,null,4));
console.log(JSON.stringify(customObj3,null,'---'));



//typeerror is raised when toString method is not available

var nullObj = Object.create(null);

// console.log(String(nullObj));       //typeerror, toString method is not available

//JSON.strngify works
console.log(JSON.stringify(nullObj));


