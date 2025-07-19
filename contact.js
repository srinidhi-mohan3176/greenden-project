var sidenav = document.getElementById("sidenav");
var menubar = document.getElementById("menubar");
var closeNav = document.getElementById("close-nav");  // Get the close button

// Open the sidebar when menu icon is clicked
menubar.addEventListener("click", function () {
  sidenav.style.right = "0";
});

// Close the sidebar when 'X' is clicked
closeNav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
