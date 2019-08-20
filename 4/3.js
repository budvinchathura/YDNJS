//checking for existing feature

function withMyCool() {
    var a = function () {
        console.log("my cool");
    };

    function doCool() {

        var tool = (typeof a !== "undefined") ? a : function () { console.log("default cool") };

        tool();
    }


    doCool();
}

function withoutMyCool() {

    function doCool() {

        var tool = (typeof a !== "undefined") ? a : function () { console.log("default cool") };

        tool();
    }

    doCool();
}

withMyCool();
withoutMyCool();

//or we can use dependency injection

var myCoolWay = function(){
    console.log("my another cool")
};

function doCool2(way){
    way = way || function(){
        console.log("default cool way");
    };
    way();
}

doCool2();              //default
doCool2(myCoolWay);         //my cool way

