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

       
});

$('#confirmar').click(function(event){
	event.preventDefault();
	adicionar();
})

function adicionar(){
	var nome = $('#nome').val();
	if(nome != ''){
	$.ajax({
		type: "POST",
		url:  "./post/convite.php",
		data: 'action=adicionar&nome='+nome,
		dataType: "JSON",
		success: function(retorno) {
			buscar();
		}
	});
	}else{
		buscar();
	}
}

function buscar(){
	$.ajax({
		type: "POST",
		url:  "./post/convite.php",
		data: 'action=buscar',
		dataType: "JSON",
		success: function(retorno) {
			var html = ''
			$('#convidados').empty();
			$.each(retorno, function( index, value ) {
				if(value != ''){
				  html = '<div class="col-sm-2 mb-2">\
	            			<div class="card">\
							  <div class="card-header text-center">'
							  +value+
							  '</div>\
							  <div class="card-body text-center">\
							  	<span class="text-success display-4">\
							  		<i class="fas fa-smile-beam"></i>\
							  	</span>\
							  </div>\
							</div>\
	            		</div>'
	            
			
            $('#convidados').append(html);
        }
			});
            
		}
	});
}