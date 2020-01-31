function check(form)
{ if(form.userid.value == "")
{
    alert("please Enter user name");
}
else if(form.pwd.value=="")
{
    alert("please Enter Password"); 
}

else if(form.pwd.value===form.pwd2.value){
    alert("User sign up successful");
    window.location = "Admin.html"; // Redirecting to users home page.
    return false;
	}
else
{
	alert("Passwords Don't Match");
	return false;
}
}