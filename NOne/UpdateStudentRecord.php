<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate user ID from JSON $obj array and store into $S_Name.
 $S_ID = $obj['name'];
 
//  // Populate user name from JSON $obj array and store into $S_Name.
//  $S_Name = $obj['phone_no'];
 
//  // Populate user Class from JSON $obj array and store into $S_Class.
//  $S_Class = $obj['user_class'];
 
 // Populate user Phone Number from JSON $obj array and store into $S_Phone_Number.
 $S_Phone_Number = $obj['phone_no'];
 
 // Populate Email from JSON $obj array and store into $S_Email.
 $S_Email = $obj['email_id'];
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "UPDATE shopkeeper SET name= '$S_Name', phone_no = '$S_Phone_Number', email_id = '$S_Email' WHERE name = $S_ID";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record Successfully Inserted Into MySQL Database.' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>