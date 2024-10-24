document.getElementById('accountForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let userName = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
 
  if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
  }

  localStorage.setItem('userName', userName);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);
  localStorage.setItem('confirmPassword', confirmPassword);

 
  let successModal = new bootstrap.Modal(document.getElementById('successModal'));
  successModal.show();

  setTimeout(function() {
      window.location.href = '../login-page/login.html';
  }, 2000);
});
