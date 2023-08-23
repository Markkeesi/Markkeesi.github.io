function hamburger() {
  const menu = document.querySelector(".menuIcon");
  menu.classList.toggle("change");

  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("responsive");
}

window.onclick = function(e) {
  if (!e.target.matches(".menuIcon, .bar1, .bar2, .bar3")) {
    var navDrop = document.getElementById("navItems");
      if (navDrop.classList.contains("responsive")) {
        navDrop.classList.remove("responsive");
      }
    
    var naviDrop = document.getElementById("menuIcon");
      if (naviDrop.classList.contains("change")) {
        naviDrop.classList.remove("change");
      }
  }
}