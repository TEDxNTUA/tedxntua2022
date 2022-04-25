const box = document.querySelector('.navbar-toggler')
const stop_ = document.querySelector('.svg-header-stop');
const play = document.querySelector('.svg-header-play');

box.addEventListener('click', (e)=>{
  stop_.classList.toggle('hidden');
  play.classList.toggle('hidden')
})


document.addEventListener('click', function(e) {
    const container = document.getElementById('navbar-nav');
    var isvis = container.classList.contains('show'); 
    if (!container.contains(e.target) && isvis) {
      document.getElementById("navbar-button").click();  
    }
});