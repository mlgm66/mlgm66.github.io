 var currentSubmenu = document.getElementById("submenu2");

document.getElementById("btn1").addEventListener("click", function() {
  showSubmenu("submenu1");
});

document.getElementById("btn2").addEventListener("click", function() {
  showSubmenu("submenu2");
});

document.getElementById("btn3").addEventListener("click", function() {
  showSubmenu("submenu3");
});

document.getElementById("btn4").addEventListener("click", function() {
  showSubmenu("submenu4");
});

document.getElementById("btn5").addEventListener("click", function() {
  showSubmenu("submenu5");
});
document.getElementById("btn6").addEventListener("click", function() {
  showSubmenu("submenu6");
});


function showSubmenu(submenuId) {
  var submenu = document.getElementById(submenuId);
  
  if (submenu !== currentSubmenu) {
    currentSubmenu.classList.remove("active");
    submenu.classList.add("active");
    currentSubmenu = submenu;
  }
} 

