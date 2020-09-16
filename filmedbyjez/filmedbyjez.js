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


//Back To Top Button    
//Get the button
var mybutton = document.getElementById("myBtn");
//Show button after 20px Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}