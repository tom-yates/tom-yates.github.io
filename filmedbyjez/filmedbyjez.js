$('#text').html($('.active > .pics').html());
$('.carousel').on('slid.bs.carousel', function () {
  	$('#text').html($('.active > .pics').html());
    });
    
$('#text2').html($('.active > .vids').html());
$('.carousel').on('slid.bs.carousel', function () {
        $('#text2').html($('.active > .vids').html());
    });