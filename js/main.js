
let mobile_NavBar = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    if(navBarToggle.classList.contains('open')){
        navBarToggle.classList.remove('open');
        mobile_NavBar.classList.add('hidden__menu');
    }else{
        navBarToggle.classList.add('open');
        mobile_NavBar.classList.remove('hidden__menu');
    }
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
let arg;
function showSubmenu(arg) {
  let submenu = document.getElementById(arg);
  document.getElementById(arg).classList.toggle("show");
  document.querySelector('.' + arg).classList.toggle("show");
  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdownbtn')) {
    var dropdowns = document.getElementsByClassName("submenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}