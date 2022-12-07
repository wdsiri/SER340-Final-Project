function onClick()
{
    var emailVal, passVal = false;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(!document.getElementById("exampleInputEmail1").value.match(validRegex))
   {
    alert("Invalid email address");
    document.getElementById("exampleInputEmail1").focus;
    return false;
   }
   else emailVal = true;
   
   
   if(document.getElementById("exampleInputPassword1").value.length < 8 )
   {
    alert("Invalid password");
    document.getElementById("exampleInputPassword1").focus;
    return false;
   }
   else passVal = true;

   if(emailVal && passVal) navigate();
   
}

function navigate()
{
    if(document.getElementById("student").checked) document.getElementById('loginbtn').href = "splash.html";
    else if (document.getElementById("prof").checked) document.getElementById('loginbtn').href = "splashProf.html";
    else if (document.getElementById("admin").checked) document.getElementById('loginbtn').href = "createAccount.html";
}