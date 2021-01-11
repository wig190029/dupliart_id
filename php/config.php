<?php
define('DBSERVER', 'localhost'); //db server
define('DBUSERNAME', 'root'); //db username
define('DBPASSWORD', ''); //db password
define('DBNAME', 'dupliart'); //db name

//conneting it to mysql
$db = mysqli_connect(DBSERVER, DBUSERNAME, DBPASSWORD, DBNAME);

//check db connection
if ($db===false){
  die("Error: Connection error.".mysqli_connect_error());
}
?>
