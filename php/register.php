<?php
require_ocne "config.php";
requrie_once "session.php";
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['submit'])) {
  $fullname = trim($_POST['Username']);
  $email = trim($_POST['Email']);
  $password = trim($_POST['Password']);
  $password_hash = password_hash($password, PASSWORD_BCRYPT);

  if($query = $db->prepare("SELECT * FROM users WHERE User_Email = ?"")) {
    $error = '';
    // bind parameters (s=string, i=int, b=blob, etc)
    $query->bind_param('s', $email);
    $query->execute.();
    //store result so can check if acc exist in
    $query->store_result();
        if ($query->num_rows>0) {
          $error .= '<p class "error"> The email address is already registered!</p>';
        }
        else {
          //validate password
          if (strlen($password)<6){
            $error .= '<p class="error"> Password must have at least 6 characters.</p>';
          }
        }
        if (empty($error)) {
          $insertQuery = $db->prepare("INSERT INTO users (User_Name, User_Email, User_Pw) VALUES (?, ?, ?);");
          $insertQuery ->bind_param("sss", $fullname, $email, $password_hash);
          $result = $insertQuery->execute();
          if ($result) {
            $error .= '<p class="success"> Thank you for registering!</p>';
          }
          else {
            $error .= '<p class="error"> Huh? Something went wrong!</p>';
          }
        }
      }
  }
  $query->close();
  $insertQuery->close();
  //close db connection
  mysqli_close($db);
}
?>
