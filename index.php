<!DOCTYPE html>
<html lang="en">
<!-- Head -->

<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
  <title>Home Page</title>
  <link rel="stylesheet" href="css/login_signup.css">
  <link rel="stylesheet" href="css/header.css">
</head>


<body>
  <header>
    <!--navbar start-->
    <div class="navbar">
      <div class="headings">
        <marquee>spring season sale is going on</marquee>
      </div>
      <!--icons-->
      <div class="icons">
        <div class="facebook">
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
        </div>
        <div class="instagram">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="twitter">
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>
        <div class="pinterest">
          <a href="#"><i class="fa-brands fa-pinterest"></i></a>
        </div>
      </div>

      <!-- Currency and Language Switchers -->
      <div class="nav-extras">
        <!-- Currency Dropdown -->
        <select name="currency" class="currency-selector">
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>

        <!-- Language Dropdown -->
        <select name="language" class="language-selector">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
        </select>
      </div>
  </header>
  <div class="container">
    <div class="login-popup">
      <form action="login.php" method="post">
        <p class="login-title">Log in <a href="#"><i class="fa-brands fa-pinterest"></i></a></p>
        <p>
          <input type="text" name="email" placeholder="Email *" required autofocus>
        </p>
        <p>
          <input type="password" name="password" placeholder="Password *" required>
        </p>
        <a href="#">Forgot your password?</a> <br>
        <button class="btn btn-dark ">Log in</button>
        <a href="#" id="login">New Customer? Create your Account</a>
      </form>
    </div>
    <div class="signup-popup">
      <form action="signup.php" method="post">
        <p class="signup-title">Register</p>
        <p>
          <input type="text" name="fname" id="fname" placeholder="First Name" autofocus>
        </p>
        <p>
          <input type="text" name="lname" id="lname" placeholder="Last Name">
        </p>
        <p>
          <input type="text" name="email" placeholder="Email *" required>
        </p>
        <p>
          <input type="password" name="password" placeholder="Password *" required>
        </p>
        <button class="btn btn-dark ">Log in</button>
        <a href="#" id="signup">Already have an Account? Log in here</a>
      </form>
    </div>
  </div>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script/script.js"></script>
</body>

</html>