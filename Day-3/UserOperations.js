/**
 * Created by arnav on 10/15/2015.
 */

    function User(userid,password){
    this.userid = userid;
    this.password = password;
}

var useroperation = {
    checkLogin:function(userid,password){
        var userObject  = new User(userid,password);
        console.log("Check Login ",userObject);
        if(userObject.userid===userObject.password){
            console.log("Inside If ");
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports=useroperation;