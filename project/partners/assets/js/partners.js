import $ from 'jquery'

const leafletFrame = document.getElementById('leaflet-iframe')

$(document).ready(function () {
    $('#leaflet-modal').on('show.bs.modal', function (event) {
        var btn = event.relatedTarget
        var leafletPath = btn.dataset.leafletUrl
        // Update img of modal
        leafletFrame.setAttribute('src', leafletPath + '#view=Fit')
    })
})

var activePartner;

$('.image-container').on("click touch", function() {
    activePartner = $(this);
    $(this).addClass('hover');
    $('.image-container').not(this).removeClass('hover');
});
    
$(window).on("click", function(e) {
    if (activePartner != null) {
        if ($(e.target.parentElement).hasClass('image-container') == false) {
            activePartner.removeClass('hover');
        }
    }
});

$('.pop-up-button').on("click touch", function(){
    let id = this.id.concat("-modal");
    let m = document.getElementById(id);
    $(m).removeClass('hidden');
});

$('.stopscroll').on("click touch", function(){
    if (!document.body.classList.contains("noscroll")) {
        document.body.classList.toggle("noscroll");
    }
});

$('.modal-close').on("click touch", function(){
    let m1 = this.parentElement.parentElement;
    $(m1).addClass('hidden');
    if (document.body.classList.contains("noscroll")) {
        document.body.classList.toggle("noscroll");
    }
});

// document.addEventListener('click', function(e) {
//     const container = document.getElementById('modal-content-id');
//     if (!container.contains(e.target)) {
//       let m2 = container.parentElement; 
//       var isvis = m2.classList.contains('hidden'); 
//       document.getElementById("navbar-button").click();  
//     }
// });

