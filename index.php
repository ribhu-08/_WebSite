<!DOCTYPE html>
<html lang="en">

<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>Home Page</title>
  <link rel="stylesheet" href="css/style.css">
</head>


<body>
  <div class="login-container">
    <div class="login-popup">
      <form action="login.php" method="POST">
        <Label>Log in</Label>
        <input type="text" name="email" placeholder="Email *" required>
        <input type="password" name="password" placeholder="Password *" required>
        <a href="#">Forgot your password?</a>
        <button class="btn btn-dark p-5">Log in</button>
      </form>
    </div>
    <div class="signin-popup" method="post">
      <form action="signup.php">
        <Label>Register</Label>
      </form>
    </div>
  </div>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
  <script href="script/script.js"></script>
</body>


</html>