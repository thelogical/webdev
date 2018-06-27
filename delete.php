<?php
$c_name = "'".$_GET["c"]."'";

session_start();

$username = $_POST["user"];

$servername = "localhost";
$userlogin = "server";
$passwordlogin = "server123";

 	             // Create connection
$conn = mysqli_connect($servername, $userlogin, $passwordlogin,'project');

                 // Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

$sno = "'".$_SESSION["S"]."'";

$sql = "delete from contract_details where Contract_Name = ".$c_name." and Sno =".$sno;
echo $conn->query($sql);


?>
