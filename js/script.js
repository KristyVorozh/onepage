const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container_menu ul li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
    }
});

navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
    li.classList.add("active");
    }
});
});
$(".js-range-slider").ionRangeSlider({
    min: 0,
    max: 500,
    from: 250,
});

var burger=document.getElementById("nav_burger");
var burger_btn=document.getElementById("nav_burger-logo");

burger_btn.onclick=function(){
    if(burger.style.display=="block"){
        burger.style.display="none";
    } else {
        burger.style.display="block";
    }
}

window.onclick = function(event) {
    if (event.target == burger) {
        burger.style.display = "none";
    }
}
