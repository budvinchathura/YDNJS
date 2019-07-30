//simple module
function arithmetic() {

    var publicAPI = {
        simplify: add,                  //setting default simplifier
        config: config
    };

    function add(x, y) {
        return x + y;
    }

    function substract(x, y) {
        return x - y;
    }
    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        if (y != 0) {
            return x / y;
        } else {
            return undefined;
        }
    }


    function config(mode) {
        switch (mode) {
            case 0: publicAPI.simplify = add; break;
            case 1: publicAPI.simplify = substract; break;
            case 2: publicAPI.simplify = multiply; break;
            case 3: publicAPI.simplify = divide; break;
            default: break;
        }
    }

    return publicAPI;
}

var mySimplifier = arithmetic();
mySimplifier.config(0);
console.log(mySimplifier.simplify(5, 2));           //7
mySimplifier.config(3);
console.log(mySimplifier.simplify(5, 2));           //2.5
mySimplifier.config(2);
console.log(mySimplifier.simplify(5, 2));           //10


var mySimplifier2 = arithmetic();               //new instance
console.log(mySimplifier2.simplify(6, 8));          //14 

//prev instance
console.log(mySimplifier.simplify(9,3));        //27       
