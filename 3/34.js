//shared properties with es6 class mechanism

class D{
    constructor(){
        console.log("object constructed");
    }

    inc(){
        D.prototype.count++;
    }

    show(){
        console.log(this.count);
    }


    myinc(){
        //acts as this.count = this.count + 1
        //create "count" property in the instantiated object
        //further calls for this.count points to this newly created property
        this.count++;
    }
}

D.prototype.count = 0;

var d1 = new D();
var d2 = new D();

d1.inc();

d1.show();
d2.show();

d2.inc();

d1.show();
d2.show();

console.log(d1.count===d2.count);

d1.myinc();

d1.show();      //3
d2.show();      //

d2.myinc();
d1.show();      //3
d2.show();      //3

console.log(d1.count === d2.count);     //true, values are equal

console.log(D.prototype.count);     //2 beacuse last increment to this count variable was 1+1