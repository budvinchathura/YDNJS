//this

var obj = {
    id: "awesome",
    cool: function coolFunc(){
        console.log(this.id);           //binding to "this" is dynamic
    }
};

var id = "funny";

obj.cool();
setTimeout(obj.cool,1000);              //when running this, "this" refers to global object

var obj2 = {
    id2: "123",
    cool2 : ()=>{
        console.log(this.id2);
    }
};

var id2 = "000";
obj2.cool2();
setTimeout(obj2.cool2,1500);