var a = [1,'2',[3]];

console.log(a.length);
console.log(a[0]);
console.log(a[2][0] === 3);

//can add elements later
var b = [];
console.log(b.length);      //0

b[0] = 10;
b[1] = 11;

console.log(b.length)       //2

//can have sparse arrays, but not recommended
 var c = []
 c[0] = 'a';
 c[2] = 'b';
 console.log(c.length);     //3
 console.log(c[1]);         //undefined

//  arrays can have other properties also
//  but it is not practiced
// they are not counted when calculating .length property

var d = []
d[0] = 100;
d[1] = 99.9;
d['name'] = 'John'
d['age'] = 20;
console.log(d)

//this changes [1] index
d['1'] = 'new value'
console.log(d)


//make an array from aray-like object
function makeArray(){
    var arr = Array.prototype.slice.call(arguments);
    arr.push("another_item")
    return arr
}

var myArr = makeArray('item1',2,'iii')
console.log(myArr);


//or use ES6 builtin function

function makeArray2(){
    var arr = Array.from(arguments)
    return arr
}

var myArr2 = makeArray2('itm1','item2',0);
console.log(myArr2);
