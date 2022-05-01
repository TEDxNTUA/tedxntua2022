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



$('.modal-close').on("click touch", function(){
    let m1 = this.parentElement.parentElement;
    $(m1).addClass('hidden');
});