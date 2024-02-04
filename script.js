const menu = document.querySelector(".menu");
const options = document.querySelector(".menu-options");

function showOptions() {
  menu.classList.toggle("active-menu");
  if (menu.classList.contains("active-menu")) {
    menu.querySelector("p").innerText = "x";
    menu.querySelector("h1").style.color = "#ffffff";
    options.classList.add("active");
  } else {
    menu.querySelector("p").innerHTML = "&equiv;";
    menu.querySelector("h1").style.color = "#45c889";
    options.classList.remove("active");
  }
}
menu.addEventListener("click", showOptions);
