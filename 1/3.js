var myarray = [1,45.8,null,"hello",undefined,true]
console.log(myarray);
for (let i = 0; i < myarray.length; i++) {
    console.log(myarray[i]+"\t"+typeof myarray[i]);    
}

myarray.myproperty = 100;           //can add more properties but it is not good
console.log(myarray["myproperty"]);

console.log(myarray["0"]);          //ok, returns first value
console.log(myarray[10]);           //undefined