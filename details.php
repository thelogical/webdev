<!DOCTYPE html>
<html>
<head>
	<title>Portal</title>
	<link rel="icon" type="image/png" href="favicon.ico"/>
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<link rel="stylesheet" href="style.css"> 
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="main.js"></script>
	<script type="text/javascript" src="main2.js"></script>
</head>
<body>
	<div class="Body">
		<button type="button" onclick="logout()" id="logout">Logout</button>
		<div class="content">
			<div class="tab">
				<button type="button" id="Contracts_show" onclick="activate('Contracts',this.id)">Contracts</button>
				<button type="button" id="Payments_show" onclick="activate('Payments',this.id)">Payments</button>
				<div class="Rows_to_display">
				 <input type="number" id="no_of_rows" size="1" min="1" value="1">
				 <input type="submit" name="submit" value="Load" onclick="Load('no_of_rows')">
				</div>
			</div>
			<div id="Contracts">
				<form>
				<table id="C_details">
                      <tr>
                         <th>Contract Name</th>
                         <th>Vendor Name</th>
                         <th>Vendor Address</th>
                         <th>Vendor Phone</th>
                         <th>Bank Garantee No</th>
                         <th>Expiry Date</th>
                         <th>Value of Contract</th>
                      </tr>
				<?php 
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
                 
                 
                 session_start();
                 $sno = $_SESSION["S"];
                 $sno = "'".$sno."'"; 
                 $sql = "select * from contract_details where Sno = ".$sno;
                 $result = $conn->query($sql);
                 
                 $start = $_SESSION["start"];
                 $total_r = $_SESSION["total_rows"];
                 $end = $start + $total_r;

                 
                 $index = 0;
                 do
                 {
                 	if($index >= $start)
                 	{
                 		break;
                 	}
                 	$index++;
                 }while($row = $result->fetch_assoc());


                 while($row = $result->fetch_assoc()) 
                 {
                 
                   echo 
                   "
                      <tr>
                         <td onclick=\"edit(this)\">".$row["Contract_Name"]."</td>
                         <td onclick=\"edit(this)\">".$row["Vendor_Name"]."</td>
                         <td onclick=\"edit(this)\">".$row["Vendor_Address"]."</td>
                         <td onclick=\"edit(this)\">".$row["Vendor_Phone"]."</td>
                         <td onclick=\"edit(this)\">".$row["Bank_Guarantee_No"]."</td>
                         <td onclick=\"edit(this)\">".$row["Expiry_Date"]."</td>
                         <td onclick=\"edit(this)\">".$row["Value_Of_Contract"]."</td>
                      </tr> 
                   ";
                    if($index >= $end - 1)
                    {
                    	break;
                    }
                    $index++; 
                }
				?>
				  
                      <tr id="add">
				      	
				      		<td><input type="text" id="Contract_Name"></td>
				      		<td><input type="text" id="Vendor_Name"></td>
				      		<td><input type="text" id="Vendor_Address"></td>
				      		<td><input type="text" id="Vendor_Phone"></td>
				      		<td><input type="text" id="Bank_Guarantee_No"></td>
				      		<td><input type="text" id="Expiry_Date"></td>
				      		<td><input type="text" id="Value_Of_Contract"></td>
				      	
				      </tr>
				</table>
			    </form>
				<button type="button" id="adding" onclick="AddValues()">+</button>
				<button type="button" id="Input" onclick="Input()">Save</button>
				<button type="button" id="update" onclick="Update()">Update</button>
				<button type="button" id="prev" onclick="setprev( <?php session_start(); echo $_SESSION["start"]; ?> )"> < </button>
				<button type="button" id="next" onclick="setnext( <?php session_start(); echo $_SESSION["start"]; ?>  )"> > </button>
				<input type="text" id="find" placeholder="Find by Contact Name">
				<input type="submit" name="Find" value="Find" onclick="Find('find')">
			</div>	
			<div id="Payments">
				<form>
				<table id="P_details">
                      <tr>
                         <th>Contract Name</th>
                         <th>Bill date</th>
                         <th>Processing Date</th>
                         <th>Amount</th>
                      </tr>
				<?php 
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
                 
                 
                 session_start();
                 $sno = $_SESSION["S"];
                 $sno = "'".$sno."'"; 
                 $sql = "select * from payment_details where Sno = ".$sno;
                 $result = $conn->query($sql);
                 
                 $start = $_SESSION["start"];
                 $total_r = $_SESSION["total_rows"];
                 $end = $start + $total_r;

                 
                 $index = 0;
                 do
                 {
                 	if($index >= $start)
                 	{
                 		break;
                 	}
                 	$index++;
                 }while($row = $result->fetch_assoc());


                 while($row = $result->fetch_assoc()) 
                 {
                 
                   echo 
                   "
                      <tr>
                         <td onclick=\"edit2(this)\">".$row["Contract_Name"]."</td>
                         <td onclick=\"edit2(this)\">".$row["Bill_date"]."</td>
                         <td onclick=\"edit2(this)\">".$row["Processing_date"]."</td>
                         <td onclick=\"edit2(this)\">".$row["Amount"]."</td>
                      </tr> 
                   ";
                    if($index >= $end - 1)
                    {
                    	break;
                    }
                    $index++; 
                }
				?>
				  
                      <tr id="add2">
				      	
				      		<td><select id="contract_name"></select></td>
				      		<td>Y:<select id="Bill_year"></select>M:<select id="Bill_month"></select>D:<select id="Bill_date"></select></td>
				      		<td>Y:<select id="Processing_year"></select>M:<select id="Processing_month"></select>D:<select id="Processing_date"></select></td>
				      		<td><input type="number" id="Amount"></td>
				      </tr>
				</table>
			    </form>
				<button type="button" id="adding2" onclick="AddValues2()">+</button>
				<button type="button" id="Input2" onclick="Input2()">Save</button>
				<button type="button" id="update2" onclick="Update2()">Update</button>
				<button type="button" id="prev2" onclick="setprev2( <?php session_start(); echo $_SESSION["start"]; ?> )"> < </button>
				<button type="button" id="next2" onclick="setnext2( <?php session_start(); echo $_SESSION["start"]; ?>  )"> > </button>
				<input type="text" id="find2" placeholder=" Contact Name">
				<input type="text" id="find_2" placeholder="Bill Date">
				<input type="submit" name="Find" value="Find" onclick="Find2('find2','find_2')">
			</div>	
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script src="js/main2.js"></script>
</body>
</html>