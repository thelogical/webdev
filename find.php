<?php 

session_start();

$name = "'".$_GET["Name"]."'";

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

$sql = "select * from contract_details where Contract_Name=".$name;

$result = $conn->query($sql);

$row=mysqli_fetch_array($result,MYSQLI_NUM);

echo json_encode($row);


?>