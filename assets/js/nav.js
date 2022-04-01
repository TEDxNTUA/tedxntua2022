let links = document.getElementById('navbar-nav');
console.log(links);
let links_buttons = Array.from(links.children);

//function in order to color current link in navbar
links_buttons.forEach(element => {
    // console.log(element);
    // console.log(this);
    
    let current = element.childNodes[1];
    // console.log(window.location.href);
    console.log(current);
    if(current.href==window.location.href){
        current.classList.add('activelink');
    }
});
console.log("Hi");

const box = document.querySelector('.navbar-toggler-icon');
let dropmenu = document.getElementById('phone-navbar-nav');
console.log(box);
box.addEventListener('click', (e)=>{
  e.target.classList.toggle('paused');
  dropmenu.classList.toggle('hidden');
})

// const div1 = document.querySelector('.dropdown-list-identifier'); 
// div1.addEventListener('click', (e)=> {
//   e.target.classList.toggle('hidden');
// })