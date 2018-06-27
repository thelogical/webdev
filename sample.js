function validateForm()
{
	var usr = document.forms["login"]["user"].value; 
	var pass = document.forms["login"]["password"].value;
    if(usr == '' || pass == '')
    {
    	document.getElementById("err").innerHTML = 'Fields cannot be empty';
    	err.style.display = 'block';
    	return false;
    }
    if(usr.length < 4)
    {
    	document.getElementById("err").innerHTML = 'username length too small!';
    	err.style.display = 'block';
    	return false;
    }
    if(pass.length < 4)
    {
    	document.getElementById("err").innerHTML = 'Password length too small!';
    	err.style.display = 'block';
    	return false;
    }
    return true;
}

function success()
{
	alert('success!');
}

function failurepass()
{
	document.getElementById("err").innerHTML = 'Username or Password incorrect!';
    err.style.display = 'block';

}

function failureuser()
{
	document.getElementById("err").innerHTML = 'Username doesnt exist!';
    err.style.display = 'block';
}

function New()
{
	alert("hello");
}