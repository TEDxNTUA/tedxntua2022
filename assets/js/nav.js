const box = document.getElementById('navbar-button');

box.addEventListener('click', function(e) {
  const stop_ = document.getElementById('stop-button');
  const play = document.getElementById('play-button');
  console.log(play); 
  console.log(stop_);
  stop_.classList.toggle('hidden');
  console.log("Hi");
  play.classList.toggle('hidden');
});

document.addEventListener('click', function(e) {
    const container = document.getElementById('navbar-nav');
    var isvis = container.classList.contains('show'); 
    if (!container.contains(e.target) && isvis) {
      document.getElementById("navbar-button").click();  
    }
});