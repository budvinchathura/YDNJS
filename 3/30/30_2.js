//with delegation pattern

var LoginController = {
    errors: [],
    getUser: function () {
        return document.getElementById("login_username").value;
    },
    getPassword: function () {
        return document.getElementById("login_password").value;
    },
    validate: function (user,pw) {
        user = user || this.getUser();
        pw = pw || this.getPassword();

        if (!(user && pw)) {
            this.failure("Please enter username & password");
            return false;
        } else if (pw.length <= 3) {
            this.failure("Password must be 3+ characters");
            return false;
        }

        return true;
    },

    showDialog: function(title,msg){
        console.log("Title: "+title+"  Msg: "+msg);
    },

    failure: function(err){
        this.errors.push(err);
        this.showDialog("Error",err);
    }
};

var AuthController = Object.create(LoginController);

AuthController.errors = [];

AuthController.checkAuth = function(){
    var user = this.getUser();
    var pass = this.getPassword();

    if(this.validate(user,pass)){
        this.server("http://localhost",{
            user:user,
            pw:pass
        }).then(this.accepted.bind(this)).catch(this.rejected.bind(this));
    }
};

AuthController.server = function(url,data){
    return $.ajax({
        url:url,
        data:data,
        dataType: "jsonp",
        jsonpCallback: "something"
    })
};

AuthController.accepted = function(){
    this.showDialog("Success", "Authenticated");
};

AuthController.rejected = function(err){
    this.failure("Auth failed: "+err)
};

var controller1 = Object.create(AuthController);

function doit(){
    controller1.checkAuth();
}


$(document).ready(function () {
    $("#mybutton").click(doit);

});