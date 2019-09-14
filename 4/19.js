//coercion ToNumber

var a = 'hello';
var b = '34';

console.log(Number(a));     //coercion fails, return NaN
console.log(Number(b));


// toNumber coercion looks for valueOf() function
//if that is not present, then looks for toString
//if both are absent, typeError

var c = {
    prop1:'some text',
    valueOf : function(){
        return '55';
    }
};

console.log(Number(c));         //55


var d = {
    toString:function(){
        return '12';
    }
};

console.log(Number(d));         //12


var e = {
    valueOf:function(){
        return '50'
    },
    toString:function(){
        return '100'
    }
}
console.log(Number(e));         //50, valueOf() has the precedence


var nullObj = Object.create(null);
console.log(Number(nullObj));           //error