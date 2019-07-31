global.id = 999;

function adder(a,b){
    console.log(a+" + "+b+" = "+(a+b));
    console.log(this.id);
    console.log();
}

//apply function takes first argument as "this" binding
//if we are not interested in that, we pass "null"
adder.apply(null,[4,5]);

// adder.apply(null,3,4); //does not work, need array for second argument

adder.call(null,5,7);

// adder.call(null,[5,7]);     //does not work, does not accept array, needs comma seperated

//currying
var tenAdder = adder.bind(null,10);
tenAdder(8);

var oneplusone = adder.bind(null,1,1);
oneplusone();

// var twoplustwo = adder.bind(null,[2,2]);    //does not work
// twoplustwo();

//using null can cause problems
//instead use an empty object
//aka DMZ object
var ø = Object.create(null);

var oneAdder = adder.bind(ø,1);
oneAdder(12);
