function usernameChe(){
    let username = document.getElementById('username').value;

    if(username.length<5){
        alert("Make sure that username has at least 5 characters.");
        return false;
    }
    return true;
}

function emailChe(){
    let pattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    
    let email = document.getElementById('email').value;

    if(!pattern.test(email)){
        alert("The email entered does not mean specified checks.");
        return false;
    }
    return true;

}

function passwordChe(){
    let password = document.getElementById('password').value;

    let regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;;

    if(password.length<6){
        alert("The password must contain at least 6 characters");
        return false;
    }
    if(password.length>10){
        alert("The password must contain at most 10 characters");
        return false;        
    }
    if(!regularExpression.test(password)){
        alert("The password does not means required specifications");
        return false;
    }
    return true;
}
function mobile_che(){
    mobile = document.getElementById('mobile').value;
    let regularExpression  = /^[0-9]$/;
    if(mobile.length > 10 && mobile.length < 10){
        alert("Mobile number must contain at least 10 numbers");
        return false;
    }
    return true;
}
function login_che(){
    if(passwordCheck() && usernameCheck()){
        return true;
    }
    return false;
}

function register_che(){
    if(passwordChe() && usernameChe() && emailChe() && mobile_che()){
        return true;
    }
    return false;
}

