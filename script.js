const form = document.getElementById('loginForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple check
  if(email === "test@example.com" && password === "123456") {
    alert("Login successful!");
  } else {
    alert("Invalid email or password.");
  }
});
