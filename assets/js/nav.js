function menuToggle(){
  let box = document.querySelector('.navbar-toggler');

  box.addEventListener('click', (e)=>{
    console.log('hi');
    let stop_ = document.querySelector('.svg-header-stop');
    let play = document.querySelector('.svg-header-play');
    stop_.classList.toggle('hidden');
    play.classList.toggle('hidden')
  })
}
menuToggle();

document.addEventListener('click', function(e) {
    const container = document.getElementById('navbar-nav');
    var isvis = container.classList.contains('show'); 
    if (!container.contains(e.target) && isvis) {
      document.getElementById("navbar-button").click();  
    }
});

