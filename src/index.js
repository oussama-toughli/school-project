import './scss/style.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper.min.js';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';

$(document).ready(function() {
    $(".first-list-element").addClass("active");
    $(".nav-link").click(function(){ 
    $(".nav-link").removeClass("active",);
    $(this).addClass("active")

});

    $("a.scroll").on('click', function(event) {
 
        var hash = this.hash;
 
        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 650, function(){});
    
    });
})