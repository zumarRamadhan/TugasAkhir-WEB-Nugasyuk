// Ambil elemen sidebar
var sidebar = document.querySelector('aside ul');

// Ambil semua elemen li dalam sidebar
var sidebarItems = sidebar.querySelectorAll('li');

// Loop melalui setiap elemen li dalam sidebarItems
sidebarItems.forEach(function(item) {
  // Tambahkan event listener untuk setiap elemen li
  item.addEventListener('click', function() {
    // Hapus class "active" dari semua elemen li dalam sidebarItems
    sidebarItems.forEach(function(item) {
      item.classList.remove('active');
    });
    // Tambahkan class "active" pada elemen li yang sedang di-klik
    this.classList.add('active');
  });
});

function showDetail() {
  const detailProfile = document.querySelector('.detail-profile');
  detailProfile.style.transform = 'translateX(0px)';
}

function closeDetail() {
  const detailProfile = document.querySelector('.detail-profile');
  detailProfile.style.transform = 'translateX(100%)';
}

function togglePassword() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function togglePasswordNew() {
  var passwordField = document.getElementById("newPassword");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function togglePasswordConfirm() {
  var passwordField = document.getElementById("confirmPassword");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

// 

const forgetButton = document.getElementById("btn-forget-pass");
const forgetPopup = document.getElementById("popup-forget");

function showForgetPopup() {
  forgetPopup.style.display = "flex";
  forgetPopup.style.animation = "slide-down 0.5s ease-in-out";
}

function closeForgetPopup() {
  forgetPopup.style.animation = "slide-up 0.5s ease-in-out";
  setTimeout(() => forgetPopup.style.display = "none", 500);
}

forgetButton.addEventListener("click", showForgetPopup);

// 

const logoutButton = document.getElementById("btn-logout");
const logoutPopup = document.getElementById("popup-logout");

function showLogoutPopup() {
  logoutPopup.style.display = "flex";
  logoutPopup.style.animation = "slide-down 0.5s ease-in-out";
}

function closeLogoutPopup() {
  logoutPopup.style.animation = "slide-up 0.5s ease-in-out";
  setTimeout(() => logoutPopup.style.display = "none", 500);
}

logoutButton.addEventListener("click", showLogoutPopup);

