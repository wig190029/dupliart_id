<?php
//start the session
session_start();

//if user already logged in, redirect to welcome page
if (isset($_SESSION["userID"]) && $_SESSION["userID"] === true) {
  header("location: index.html");
  exit;
}
?>
