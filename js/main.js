
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
let arg;
function showSubmenu(arg) {
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
