//Grabage collection

//In this method, even after processing data, data is available in global scope
//it is unnecessary

function process(data){
    //do something with data
}

var someReallyBigData = {/*some huge data*/};

process(someReallyBigData);
//other work

//===============================
//Method 2 - beter
//does not keep big data variable around

function process2(data){
    //do somthing with data
}

{
    let someBigData = {/*huge data*/};
    process2(someBigData);
}

//other work