let originalForm=document.getElementById("form_visible");
let createNewAcc=document.getElementById("form_hidden");
let button=document.querySelector(".signupBtn");
let continue1=document.querySelector(".continue");
let signin=document.querySelector(".oldAcc");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    originalForm.style.display="none";
    createNewAcc.style.display="block";
    var created=document.getElementById("created");
    created.style.display="none";
})

continue1.addEventListener("click", (e)=>{
    e.preventDefault();  
    // originalForm.style.display="block";
    // createNewAcc.style.display="none";
})
signin.addEventListener("click", (e)=>{
    e.preventDefault();
    originalForm.style.display="block";
    createNewAcc.style.display="none";
})

continue1.onclick =function(){
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let newpassword=document.getElementById("newpassword").value;
    let incorrect=document.getElementById("incorrect_password");
    let invalid_email=document.getElementById("invalid_email");
    let req_username=document.getElementById("req_username");
    let req_password=document.getElementById("req_password");
    var flag=false;
    if(username===""){
        req_username.style.display="block";
        req_username.innerHTML="<h5>Enter the username</h5>";
        req_username.style.color="red";
        flag=false;
    }
    else if(localStorage.getItem(username)){
        req_username.innerHTML="<h5>Username already exist</h5>";
        req_username.style.color="red";
        flag=false;
    }
    else{
        req_username.style.display="none";
    }
    if(localStorage.getItem(email)){
        invalid_email.innerHTML="<h5>Email Id already exist!</h5>";
        flag=false;
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        invalid_email.style.display="none";
        flag=true;
    }
    else {
        invalid_email.style.display="block";
        invalid_email.innerHTML="<h5>You have entered an invalid email address!</h5>";
        invalid_email.style.color="red";
        flag=false;
    }
     
    if(password===""){
        req_password.style.display="block";
        req_password.innerHTML="<h5>Enter the password</h5>"
        req_password.style.color="red"
        flag=false;
    }
    else{
        req_password.style.display="none";
    }
    
    if(flag==true){
        req_password.style.display="none";
        if(password!=newpassword){  
            incorrect.style.display="block";  
            incorrect.innerHTML="<h5>Password mismatch</h5>";
            incorrect.style.color="red";
        }
        else{
            incorrect.style.display="none";
            localStorage.setItem(username, password);
            localStorage.setItem(email, password);
            created.style.display="block";
            created.innerHTML="Account Created";
            created.style.color="blue";
            created.style.textAlign="center";
        }
    }
}

let loginBtn=document.querySelector(".loginBtn");

loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();  
})
loginBtn.onclick = function(){
    let userEmail=document.getElementById("userEmail").value;
    let userPassword=document.getElementById("userPassword").value;
    let not_a_user=document.getElementById("not_a_user");
    let enterUsername=document.getElementById("enterUsername");
    if(userEmail===""){
        enterUsername.innerHTML="<h5>Please enter the username</h5>";
        enterUsername.style.color="red";
    }
    else if(userPassword===""){
        enterUsername.style.display="none";
        not_a_user.innerHTML="<h5>Please enter the password</h5>"
        not_a_user.style.color="red";
    }
    else if(localStorage.getItem(userEmail)===null){
        enterUsername.style.display="none";
        not_a_user.style.display="block";
        not_a_user.innerHTML="Not a user! Please Create Account";
        not_a_user.style.color="red";
    }
    else{
        not_a_user.style.display="none";
        enterUsername.style.display="none";
        if(userPassword!==localStorage.getItem(userEmail)){
            not_a_user.style.display="block";
            not_a_user.innerHTML="incorrect password";
            not_a_user.style.color="red";
        }
        else{
            let homepage=document.getElementById("homepage");
            let login_page=document.getElementById("login_page");
            let backtologin=document.getElementById("backtologin");
            login_page.style.display="none";
            backtologin.style.display="block";
            homepage.style.display="block";
            homepage.innerHTML="<h1>WELCOME TO FACEBOOK</h1>";
            backtologin.innerHTML="<h3>Back to login page</h3>";
            backtologin.onclick=function(){
                login_page.style.display="block";
                backtologin.style.display="none";
                homepage.style.display="none";
            }
        }
    }
}