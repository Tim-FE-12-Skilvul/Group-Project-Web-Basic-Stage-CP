const hamburger = document.querySelector('#hamburger-container');
const menuNav = document.querySelector('#menuNav');
const pencarianNav = document.querySelector('#pencarianNav');

hamburger.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    pencarianNav.classList.toggle('active');
});

      // Cek apakah pengguna sudah login
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");

      if (username && password) {
        // Jika pengguna sudah login, tampilkan gambar profil
        const profileContainer = document.querySelector(".profile-container");
        profileContainer.innerHTML =
          '<a href="./../Halaman profile/index.html"><img src="https://raw.githubusercontent.com/Dedytobing/personalWebsite/main/img/logo.png" alt="Gambar Profil"></a>';
      }