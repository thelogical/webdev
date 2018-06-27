<?php


session_start();

$username = $_POST["user"];
$password = $_POST["password"];

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

$sql = "select count(*) as length from contract_details where Sno = ".$sno;
$result = $conn->query($sql);

echo $result->fetch_assoc()["length"];
                 

?>