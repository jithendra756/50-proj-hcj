const card = document.querySelector(".card");
const container = document.querySelector(".container");

const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotate(15deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 1s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotate(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
