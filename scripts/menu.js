// JavaScript Document

(function(d){
	
	// d = document
	
	const $body = d.querySelector('body');
	const $btn = d.querySelector('.hamburger');
	
	$btn.addEventListener('click', function(){
		
		$body.classList.toggle('show');
		
	});
	
	
})(document);