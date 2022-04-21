// gsap.fromTo(
//     "#js-work-img",
//     { rotateX: "-90deg", perspective: "1000px", autoAlpha: 0 },
//     {
//       scrollTrigger: { trigger: "#js-work-container", start: "top center" },
//       stagger: 0.3,
//       rotateX: "0",
//       perspective: "1000px",
//       autoAlpha: 1,
//       duration: 1.6
//     }
//   );

// Hero - Model Viever 
// const modelViewer = document.getElementById('model'); 
// const orbitCycle = [
//   '45deg 55deg 4m',
//   '-60deg 110deg 2m',
//   modelViewer.cameraOrbit
// ];



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
      console.log(entry.target)
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

