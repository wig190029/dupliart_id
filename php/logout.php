<?php
//start session
session_start();
//destroy session
if (session_destroy()) {
  //redirect to welcome page
  header("Location: index.html");
  exit;
}
?>
