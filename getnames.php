<?php

$servername = "localhost";
$userlogin = "server";
$passwordlogin = "server123";

 	             // Create connection
$conn = mysqli_connect($servername, $userlogin, $passwordlogin,'project');

                 // Check connection
if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }
                 
                 
session_start();
$sno = $_SESSION["S"];

$sql = "select distinct Contract_Name from payment_details where Sno=".$sno;

$result = $conn->query($sql);

$data_arr = [];

$i = 0;
while($row = $result->fetch_assoc())
{
	$data_arr[$i++] = $row["Contract_Name"];
}

echo json_encode($data_arr);

?>