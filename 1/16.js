var obj1 = {
    prop:50
};

var obj2 = Object.create(obj1);

console.log("obj1.prop = "+obj1.prop);
console.log("obj2.prop = "+obj2.prop);

obj1.prop++                             //affects both obj1 and obj2, both have reference to same "prop"
console.log("prop of obj1 changed");
console.log("obj1.prop = "+obj1.prop);
console.log("obj2.prop = "+obj2.prop);

obj1.prop2 = 1000;                      //affects both                   
console.log("prop2 added to obj1");
console.log("obj1.prop2 = "+obj1.prop2);
console.log("obj2.prop2 = "+obj2.prop2);

obj2.prop3 = "mytext";                  //prop3 is added only to obj2, not added to obj1  
console.log("prop3 added to obj2");
console.log("obj1.prop3 = "+obj1.prop3);
console.log("obj2.prop3 = "+obj2.prop3);

obj2.prop3+="-appended";                   //affects obj2
console.log("prop3 of obj2 changed");
console.log("obj1.prop3 = "+obj1.prop3);
console.log("obj2.prop3 = "+obj2.prop3);
