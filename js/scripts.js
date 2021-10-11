const schemeSvg = document.querySelector(".scheme svg") 
const totalpricetage = document.querySelector(".price-total")
const menuButton = document.querySelector(".m-menu")
const menu = document.querySelector(".menu")
let cost = 11;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event)=>{
    if(!event.target.classList.contains('booked')&&!event.target.classList.contains('light') ){
        event.target.classList.toggle("active")
        let totalSeats = schemeSvg.querySelectorAll(".active").length
        totalPrice = totalSeats * cost;
        totalpricetage.textContent = (totalPrice)
    }
})
menuButton.addEventListener('click',()=>{
    console.log("sdasd")
    menu.classList.toggle("is-open")
   
})