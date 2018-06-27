<?php
$new = "'".$_GET["ndata"]."'";
$head = $_GET["head"];
$bill = "'".$_GET["d"]."'";

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


$sql = "update payment_details set ".$head." = ".$new." where Sno=".$sno." and Bill_date=".$bill;

echo $conn->query($sql);


?>