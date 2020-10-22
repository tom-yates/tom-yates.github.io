//Get the Button
scrollToTopButton = document.getElementById("backToTopBtn");

//When User scrolls enough, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

//When user presses button, go back to top
function scrollToTop() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0;
}

//Photos Carousel 
$('#text').html($('.active > .pics').html());
$('.carousel').on('slid.bs.carousel', function () {
  	$('#text').html($('.active > .pics').html());
    });

//Vids Carousel
$('#text2').html($('.active > .vids').html());
$('.carousel').on('slid.bs.carousel', function () {
        $('#text2').html($('.active > .vids').html());
    });