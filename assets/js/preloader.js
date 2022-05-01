(function() {
    window.addEventListener("DOMContentLoaded", () => {
      // preloader animation
      gsap.timeline().fromTo(
        "#js-preloader",
        {
          autoAlpha: 1
        },
        {
          autoAlpha: 0,
          duration: 0.8,
          delay: 3,
        }
      );
      });
})();
