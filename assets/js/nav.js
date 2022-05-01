document.getElementById('navbar-button').addEventListener('click', function(e) {
  const stop_ = document.getElementById('stop-button');
  const play = document.getElementById('play-button');
  stop_.classList.toggle('hidden');
  play.classList.toggle('hidden');
});

document.addEventListener('click', function(e) {
    const container = document.getElementById('navbar-nav');
    var isvis = container.classList.contains('show'); 
    if (!container.contains(e.target) && isvis) {
      document.getElementById("navbar-button").click();  
    }
});