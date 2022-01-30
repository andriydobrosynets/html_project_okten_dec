const btn = document.querySelector(".mobile_button");
const menu = document.querySelector(".nav_authorization");
btn.onclick = () => menu.classList.add("active");

const new_btn = document.querySelector(".close");
const btn_x = document.querySelector(".nav_authorization");
new_btn.onclick = () => btn_x.classList.remove("active")


