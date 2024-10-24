document.querySelector('.accountForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const username = document.getElementById('userName').value;
    const password = document.getElementById('userPassword').value;
  
    if (username === 'Aasif Ali' && password === '1234') {
     
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      
      setTimeout(() => {
        window.location.href = '../../../index.html';
      }, 2000);
    } else {
      alert('Username or password is incorrect!');
    }
  });
  
