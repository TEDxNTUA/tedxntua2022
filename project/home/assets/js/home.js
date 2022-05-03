// Header animation 
const spans = document.querySelectorAll('.header-text span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setInterval(() => {
		span.classList.add('active');
	}, 5600 * (idx+1))
});

// Event Statistics 
const stats = document.getElementById('event_stats')
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.remove('isnotVisible')
      entry.target.classList.add('isVisible');
      // console.log(entry.target)
    }
  });
});

observer.observe(document.querySelector('.stat1'));
observer.observe(document.querySelector('.stat2'));
observer.observe(document.querySelector('.stat3'));
observer.observe(document.querySelector('.stat4'));
observer.observe(document.querySelector('.stat5'));
observer.observe(document.querySelector('.stat6'));
//////////////

// Days Left 
let givoDates = document.querySelectorAll('[ending-time]');
for (i = 0; i < givoDates.length; i++) {
  let time1 = new Date("2022/05/21")
  let now = new Date(Date.now());
  let distance = time1.getTime() - now.getTime();

  let daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  givoDates[i].innerHTML = '<span>' + daysLeft + '</span>' + '<span> Days <strong> Left </strong> </span>';
  if (daysLeft === 1) {
    givoDates[i].innerHTML ='<span>'  + daysLeft + '</span>' + '<span> Day <strong> Left </strong> </span>';
  }
  
  if (daysLeft === 0) {
    givoDates[i].innerHTML = '<span> Ending Soon </span>';
  }

  if (daysLeft < 0) {
    givoDates[i].innerHTML = '00';
  }
}
////////////

/// Social 
let navOffsetY = 500

window.addEventListener('scroll', function() {
    socialContainer = document.querySelector("#social-container");
    footerOffsetY = document.querySelector('#footer').offsetTop;
    if (socialContainer != null) {
        if (window.pageYOffset > navOffsetY && window.pageYOffset < footerOffsetY-800) {
            socialContainer.classList.add('scrolled');
        }
        else {
            socialContainer.classList.remove('scrolled');
        }  
    }
});
