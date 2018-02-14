$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
	var $items = $(this).siblings().clone();
	$(".popup_content").children(".card").html($items);

});


$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});


$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});


// Отправка заявки 
$(document).ready(function() {
	$('form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});



// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+38(099) 999-9999");
});


