	 $(function() {
	$('#name_animated').show().delay(100).fadeOut(0);
	$('#name_header').show().delay(4000).fadeOut(1000);
	$('#name_animated').hide().delay(6000).fadeIn(1000);
	
	
	  // apply spans
      $("h2").lettering();
      
 		
		function randomBlurize() {
		text.find("span:nth-child(" + (Math.floor(Math.random()*numLetters)+1) + ")")
		    .animate({
		      'textShadowBlur': Math.floor(Math.random()*25)+4,
		      'textShadowColor': 'rgba(0,100,0,' + (Math.floor(Math.random()*200)+55) + ')'
		    });
		// Call itself recurssively
		setTimeout(randomBlurize, 100);
		} // Call once
		randomBlurize();

	 });
