// chunks
function now(){
    return 10;
}

function later(){
    answer*=2;
    console.log(`answer is ${answer}`);
}

var answer = now();
setTimeout(later,1000);


var a = {
    index:1
};

function printa(){
    console.log(a);
}

setTimeout(printa,1500);
a.index++;