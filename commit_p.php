<?php

$data = $_GET["data"];

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

$sno = $_SESSION["S"];

$sql = "insert into payment_details values(" .$sno.",";
$sql = $sql.$data.")";

echo $conn->query($sql);


?>