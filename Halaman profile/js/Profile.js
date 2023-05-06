 // Ambil data pengguna dari local storage
 const username = localStorage.getItem("username");
 const password = localStorage.getItem("password");
 const email = localStorage.getItem("email");

 // Tampilkan data pengguna ke halaman HTML
 document.getElementById("username").textContent = username;
 document.getElementById("password").textContent = password;
 document.getElementById("email").textContent = email;

// Ambil elemen tombol logout
const logoutBtn = document.getElementById('logout-btn');

// Event listener untuk tombol logout
logoutBtn.addEventListener('click', () => {
  // Hapus data login dari local storage
  localStorage.removeItem('username');
  localStorage.removeItem('password');

  // Alihkan pengguna ke halaman login
  window.location.href = '../index.html';
});
