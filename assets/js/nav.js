// const box = document.querySelector('.navbar-toggler'); 
// const dropdownmenu = document.getElementById('navbar-nan');
// var x = box.getAttribute("aria-expanded");
// box.addEventListener('click', (e)=> {
//     if (x == "true") {
//         x = "false"
//     }
//     else {
//         x = "true"
//         dropdownmenu.classList.remove()
//     }
//     if (x == "true") {

//     }
//     box.setAttribute("aria-expanded", x);
// })
// const box = document.querySelector('.navbar-toggler')
// const stop_ = document.querySelector('.svg-header-stop');
// const play = document.querySelector('.svg-header-play');
// let dropmenu = document.getElementById('phone-navbar-nav');
// box.addEventListener('click', (e)=>{
//   stop_.classList.toggle('hidden');
//   play.classList.toggle('hidden')
//   dropmenu.classList.toggle('hidden');
// })

// const div1 = document.querySelector('.dropdown-list-identifier'); 
// div1.addEventListener('click', (e)=> {
//   e.target.classList.toggle('hidden');
// })


// const box = document.querySelector('.navbar-toggler-icon');
// let dropmenu = document.getElementById('phone-navbar-nav');
// console.log(box);
// box.addEventListener('click', (e)=>{
//   e.target.classList.toggle('paused');
//   dropmenu.classList.toggle('hidden');
// })


const box = document.querySelector('.navbar-toggler')
const stop_ = document.querySelector('.svg-header-stop');
const play = document.querySelector('.svg-header-play');

box.addEventListener('click', (e)=>{
  stop_.classList.toggle('hidden');
  play.classList.toggle('hidden')
})


document.addEventListener('click', function(e) {
    const container = document.getElementById('navbar-nav');
    console.log(container);   
    if (!container.contains(e.target)) {
      document.getElementById("navbar-button").click();  
    }
});