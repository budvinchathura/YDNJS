//polyfilling

// var x = Number.isTen(10);       //error, no function called isTen

//we will define that function
if(!Number.isTen){
    Number.isTen = function(x){
        return x===10;
    }
}

var x = Number.isTen(10);

console.log(x);

x = Number.isTen(11);
console.log(x);
