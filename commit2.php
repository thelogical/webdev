<?php 

 $name = "'".$_GET["s"]."'";
 $head = $_GET["q"];
 $val = "'".$_GET["r"]."'";

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

$sql = "update contract_details set ".$head." = ".$val." where Sno = ".$sno." and Contract_Name = ".$name;

echo $conn->query($sql);

?>