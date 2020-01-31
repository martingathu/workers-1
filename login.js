function check(form)
{

if(form.userid.value == "martingathu" && form.pwd.value === "auntyalice")
{
	alert ("Login successfully");
	window.location = "userhomepage.html"; // Redirecting to users home page.
	return false;
	
}
else if(form.userid.value == "Joel-359" && form.pwd.value === "otieno3")
{
	window.location = "userhomepage.html"; // Redirecting to users home page.
	return false;
}
else if(form.userid.value == "shalomodida" && form.pwd.value === "Muthoni.12")
{
	window.location = "userhomepage.html"; // Redirecting to users users page.
	return false;

}
else if(form.userid.value == "joan-w" && form.pwd.value === "JKinyua")
{
	window.location = "userhomepage.html"; // Redirecting to users home page.
	return false;
	
}
else if(form.userid.value == "admin" && form.pwd.value === "admin")
{
	window.location = "Admin.html"; // Redirecting to users admin page.
	return false;

}
else
{
	alert("Error invalid Username or Password")
	return false;
}
}
