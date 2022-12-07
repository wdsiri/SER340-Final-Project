function onClick()
{
    if(document.getElementById("student").checked) document.getElementById('loginbtn').href = "splash.html";
    else if (document.getElementById("prof").checked) document.getElementById('loginbtn').href = "splashProf.html";
}