let navOffsetY = 100

window.addEventListener('scroll', function() {
    navBar = document.querySelector("#nav");
    navBarNav = navBar.children[1];
    
    if (window.pageYOffset > navOffsetY) {
        navBar.classList.add('scrolled')
        navBarNav.classList.add('scrolled')
    }
    else {
        navBar.classList.remove('scrolled')
        navBarNav.classList.remove('scrolled')
    }  
});