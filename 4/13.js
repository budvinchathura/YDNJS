// references

// simple values are passed by copying

var a = 2;
var b = a;
a++;
console.log(a);
console.log(b);

var c = Number(5);
var d = c;
c++;
console.log(c);
console.log(d);

//Compound values create a copy of reference

var e = [1,2,3];
var f = e;
e[1] = 'changed';           //both change
console.log(e);
console.log(f);

e = ['other','value'];      //f does not change
console.log(e);
console.log(f);

function foo(arr){
    arr.push('new');            //same logic, changes global variable also
    console.log('Inside func: '+arr);
}

var g = [5,5,5];
foo(g);
console.log(g);

function bar(arr){
    arr = ['new','value'];          //global varibale is not changed
    console.log('Inside func: '+arr);
}

var h = [4,4,4];
bar(h);
console.log(h);



//to pass a new copy of an array

function func1(arr){
    arr.push('new');            
    console.log('Inside func: '+arr);
}

var i = [2,2,2];
func1(i.slice());           //new copy is passed
console.log(i);


// to pass a primitive as a reference
// use an object wrapper
function func2(obj){
    obj.val++;
    console.log('Inside func: '+obj.val);
}

var j = {
    val:4
};
func2(j);
console.log(j.val);

// passing a number as a 'Number' object wont work