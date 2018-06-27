<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="icon" type="image/png" href="favicon.ico"/>
	<link rel="stylesheet" href="style4.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> 
    <script type="text/javascript" src="sample.js"></script>
</head>
<body>
<div class="Page">
	<div class="Container">
		 <form name="login" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?> "method="post" onsubmit="return validateForm()">

		 <h5>ACCOUNT LOGIN</h5>
         <div class="User">Username<br> </div><input type="text" name="user"><br>
         <div class="Pass">Password <br></div><input type="password" name="password"><br>
         <h6 id="err"> Input Error!</h6><br>
         <button type="submit" value="Submit">Submit</button>
         <button type="button" id="new" onclick="New()">New</button>
         </form> 
	</div>
</div>
</body>
</html>

<?php

session_start();
 
 if ($_SERVER["REQUEST_METHOD"] == "POST")
 {
 	$username = $_POST["user"];
 	$password = $_POST["password"];

 	$servername = "localhost";
 	$userlogin = "server";
 	$passwordlogin = "server123";

 	// Create connection
    $conn = mysqli_connect($servername, $userlogin, $passwordlogin,'project');

// Check connection
    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
   
    $username = "'".$username."'";

    $sql = "select * from login where user = ".$username;
    $result = $conn->query($sql);

    if ($result->num_rows > 0)
    {
    	$row = $result->fetch_assoc();
    	if($password == $row["password"])
    	{
            $_SESSION["U"] = $username;
            $_SESSION["S"] = $row["Sno"];
            $_SESSION["total_rows"] = 3;
            $_SESSION["start"] = 0;
    	    header("Location: details.php");
    	    exit;
	    }
	    else
	    {
	    	 echo '<script type="text/javascript">failurepass();</script>';
	    }
	    
    }
    else
    {
    	echo '<script type="text/javascript">failureuser();</script>';
    }



   // echo '<script type="text/javascript">success();</script>';
 }
 ?>