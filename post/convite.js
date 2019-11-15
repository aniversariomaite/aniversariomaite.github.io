$(document).ready(function() {

	$(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });

            //Onde a mágia acontece! rs
            $('.scrollToTop').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
    });

       $.ajax({
		type: "POST",
		url:  "./post/convite.php",
		data: 'action=adicionar',
		dataType: "JSON",
		success: function(retorno) {
			console.log(retorno);
		}
	});
});