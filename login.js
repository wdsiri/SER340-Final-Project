function onClick()
{
    if(document.getElementById("student").checked) document.getElementById('loginbtn').href = "courses.html";
    else if (document.getElementById("prof").checked) document.getElementById('loginbtn').href = "coursesProf.html";
}