function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
  
    // Check if the user already exists
    if (localStorage.getItem(username)) {
      alert('Username already exists. Please choose a different one.');
      return;
    }
  
    // Store the user information in localStorage
    localStorage.setItem(username, password);
  
    alert('Signup successful! You can now login.');
  }
  
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    // Check if the user exists
    if (!localStorage.getItem(username)) {
      alert('User not found. Please signup.');
      return;
    }
  
    // Check if the password is correct
    if (localStorage.getItem(username) !== password) {
      alert('Incorrect password. Please try again.');
      return;
    }
  
    alert('Login successful!');
  }