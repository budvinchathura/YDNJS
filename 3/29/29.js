//classic class style

//parent widget class
function Widget(width, height) {
    this.width = width;
    this.height = height;
    this.$elem = null;          //$ is a convention, saying it is a jQ dom object
}

Widget.prototype.render = function ($where) {
    if (this.$elem) {
        this.$elem.css({
            width: this.width + "px",
            height: this.height + "px"
        }).appendTo($where)
    }
};


//child button class

function Button(width, height, label) {
    Widget.call(this, width, height);
    this.label = label || "Default Lalebl";

    this.$elem = $("<button>").text(this.label);
}

Button.prototype = Object.create(Widget.prototype);

Button.prototype.render = function ($where) {
    Widget.prototype.render.call(this, $where);
    this.$elem.click(this.onClick.bind(this));
};

Button.prototype.onClick = function (evt) {
    console.log("Button " + this.label + " clicked!!");
};





//with es6 class syntax

class WidgetES6 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.$elem = null;
    }

    render($where){
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where)
        }
    }
}

class ButtonES6 extends WidgetES6{
    constructor(width,height,label){
        super(width,height);
        this.label = label || "Default Lalebl";

        this.$elem = $("<button>").text(this.label);
    }
    render($where){
        super.render($where);
        this.$elem.click(this.onClick.bind(this));
    }

    onClick(evt){
        console.log("Button " + this.label + " clicked!!");
    }
}


//delegation

var WidgetD = {
    init:function(width,height){
        this.width = width;
        this.height = height;
        this.$elem = null;
    },
    insert:function($where){
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where)
        }
    }
}

var ButtonD = Object.create(WidgetD);

//just like overriding init function
//chose a different name to avoid prototype confusions 
ButtonD.setup = function(width,height,label){
    this.init(width,height,label);
    this.label = label || "Default Lalebl";

    this.$elem = $("<button>").text(this.label);
};

//same reasoning here
ButtonD.build = function($where){
    this.insert($where);
    this.$elem.click(this.onClick.bind(this));
};

ButtonD.onClick = function(evt){
    console.log("Button " + this.label + " clicked!!");
};




$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = new Button(125, 30, "Helloo..");
    var btn2 = new Button(150, 30, "World...");
    btn1.render($body);
    btn2.render($body);
    $("<br>").appendTo($body);
    $("<br>").appendTo($body);

    var btn3 = new ButtonES6(125, 30, "Helloo.. ES6");
    var btn4 = new ButtonES6(150, 30, "World... ES6");
    btn3.render($body);
    btn4.render($body);
    $("<br>").appendTo($body);
    $("<br>").appendTo($body);

    var btn5 = Object.create(ButtonD);
    btn5.setup(125, 30, "Helloo.. Del..");

    var btn6 = Object.create(ButtonD);
    btn6.setup(150, 30, "World.. Del..");

    btn5.build($body);
    btn6.build($body);
});