<?php

$data = "'".$_GET["data"]."'";

session_start();

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

$sno = $_SESSION["S"];

$sql = "delete from payment_details where Sno=".$sno." and Bill_Date=".$data;

echo $conn->query($sql);

?>