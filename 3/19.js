//pseudocode
//does not work

// class Car{
//     name_ = "default name"

//     Car(name){
//         name_ = name;
//     }

//     show(){
//         console.log("Car's name is "+this.name_);
//     }
// }

// var myCar1 = new Car("new x");
// myCar1.show();

//mixin

function mixin(srcObj, targetObj){
    for(var key in srcObj){
        //only references are copied
        //changes to properties can affect both
        if(!(key in targetObj)){            //copy only non existing properties
            targetObj[key] = srcObj[key];
        }
    }

    return targetObj;
}

var vehicle = {
    engines: 1,
    ignition: function(){
        console.log("turning on engine...");
    },
    drive: function(){
        this.ignition();
        console.log("steering and moving forward...");
    }
}

var car = mixin(vehicle,{
    wheels:4,
    drive:function(){
        vehicle.drive.call(this);           //executing drive() of vehicle in context of car object
        console.log("rolling all "+this.wheels+" wheels");
    }
});

car.drive();