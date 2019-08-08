//Parent class controller
//child classes -> logincontroller and auth controller

//old style with function.prototype s



function Controller(){
    this.errors = [];
}

Controller.prototype.showDialog = function(title,msg){
    console.log("Title: "+title+"  Msg: "+msg);
};

Controller.prototype.success = function(msg){
    this.showDialog("Success",msg);
};

Controller.prototype.failure = function(err){
    this.errors.push(err);
    this.showDialog("Error",err);
};




function LoginController(){
    Controller.call(this);
}

LoginController.prototype = Object.create(Controller.prototype);

LoginController.prototype.getUser = function(){
    return document.getElementById("login_username").value;

};

LoginController.prototype.getPassword = function(){
    return document.getElementById("login_password").value;
};

LoginController.prototype.validate = function(user,pw){
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if(!(user && pw)){
        this.failure("Please enter username & password");
        return false;
    }else if(pw.length<=3){
        this.failure("Password must be 3+ characters");
        return false;
    }

    return true;
};

//override
LoginController.prototype.failure = function(err){
    Controller.prototype.failure.call(this,"Login invalid " +err);
};

function AuthController(login){
    Controller.call(this);
    this.login = login;
};

AuthController.prototype = Object.create(Controller.prototype);

AuthController.prototype.server = function(url,data){
    return $.ajax({
        url:url,
        data:data,
        dataType: "jsonp",
        jsonpCallback: "something"
    });
};

AuthController.prototype.checkAuth = function(){
    var user = this.login.getUser();
    var pass = this.login.getPassword();

    if(this.login.validate(user,pass)){
        this.server("http://localhost",{
            user:user,
            pw:pass
        }).then(this.success.bind(this)).catch(this.failure.bind(this));
    }

};

AuthController.prototype.success = function(){
    Controller.prototype.success.call(this,"Authenticated");
};

AuthController.prototype.failure = function(err){
    Controller.prototype.failure.call(this,"Auth failed "+err);
};

var auth = new AuthController(new LoginController());

function doit(){
    auth.checkAuth();
}


$(document).ready(function () {
    $("#mybutton").click(doit);

})


