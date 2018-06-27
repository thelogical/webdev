<?php 

session_start();

$_SESSION["start"] = $_SESSION["start"] - $_SESSION["total_rows"];

echo $_SESSION["start"]; 

?>