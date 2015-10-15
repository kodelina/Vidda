$(document).ready(function(){
    
    $(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });
    
    var itemImages = $( '.sveipa-beholder, .komagerband, .grindvev, .boks, .finsk-bibel, .komager, .lille-katekismen, .benkekarde, .tobakkspung, .tjaere-kopp, .bortre, .lagga-beholder, .det-nye-testamentet' );
    
    var languages = $( '.lang-no, .lang-en, .lang-sa, .lang-kv' );
    
    var languageButtons = $( '#lang-no, #lang-en, #lang-sa, #lang-kv' );
    
    var objectTexts = $( '.sveipa-beholder-text, .komagerband-text, .grindvev-text, .boks-text, .finsk-bibel-text, .komager-text, .lille-katekismen-text, .benkekarde-text, .tobakkspung-text, .tjaere-kopp-text, .bortre-text, .lagga-beholder-text, .det-nye-testamentet-text' );    
    
    //Vis og skjul språk  

    $( languages ).hide();
	
	$('#lang-no').click(function(){
		$( languages ).hide();
		$('.lang-no').fadeIn('slow');
		$( languageButtons ).css('opacity', '.5');
		$(this).css('opacity', '1');
	});
	
	$('.norsk').click(function(){
		$( languages ).hide();
		$('.lang-no').fadeIn('slow');
		$( languageButtons ).css('opacity', '.5');
		$('#lang-no').css('opacity', '1');
	});
	
	$('#lang-en').click(function(){
		$( languages ).hide();
		$('.lang-en').fadeIn('slow');
		$( languageButtons ).css('opacity', '.5');
		$(this).css('opacity', '1');

	});
	
	$('.engelsk').click(function(){
		$( languages ).hide();
		$('.lang-en').fadeIn('slow');
		$( languageButtons ).css('opacity', '.5');
		$('#lang-en').css('opacity', '1');
	});
	
	$('#lang-sa').click(function(){
		$( languages ).hide();
		$('.lang-sa').fadeIn('slow');
		$( languageButtons ).css('opacity', '.5');
		$(this).css('opacity', '1');
	});
	
    $('.samisk').click(function(){
		$( languages ).hide();
		$('.lang-sa').fadeIn('slow');
		$( languageButtons ).css('opacity', '.5');
		$('#lang-sa').css('opacity', '1');
	});
	
    $('#lang-kv').click(function(){
		$( languages ).hide();
		$('.lang-kv').fadeIn('slow');
		$( languageButtons ).css('opacity', '.5');
		$(this).css('opacity', '1');
	});
	
	$('.kvensk').click(function(){
		$( languages ).hide();
		$('.lang-kv').fadeIn('slow');
		$( languageButtons ).css('opacity', '.5');
		$('#lang-kv').css('opacity', '1');
	});

    // Gjenstander
   
    itemImages.click(function() {
        if ($(this).hasClass('blur')) {
          return;
        }
        if ($(this).hasClass('moved')) {
          reset();
          return;
        }
    
        $(this).addClass("moved");
        $(this).children('img').addClass("scaled");
        $(this).css("z-index", "2");
        itemImages.not(this).addClass("blur");
        $(this).removeClass("blur");
        $('.close').fadeIn('slow');
        $('.info').addClass("slide-in");
        $('#items').addClass("blue-bg");
        $('.big-image').fadeIn('slow');
    });
      
    $('.close').click(reset);
    
    function reset() {
        itemImages.removeClass("moved blur");
        itemImages.children('img').removeClass("scaled");
        itemImages.one("webkitTransitionEnd",
              function(event) {
                $(this).css("z-index", "");
                });
        $('.close').fadeOut('fast');
        $('.big-image').fadeOut('fast');
        $('.small-image').fadeOut('fast');
        $('.historical-image').removeClass('slide-in');
        $('.info').removeClass("slide-in");
        $('#items').removeClass("blue-bg");
    }
    
    // Lukk gjenstand hvis man trykker på 'hjem' ikon:
    
    $('#home-icon').click(reset);
      
    // Tekster til gjenstandene:
  
    itemImages.click(function(){
          objectTexts.hide();
          var currentClass = $.trim($(this).attr('class').replace('moved', ''));
          $('.'+currentClass+'-text').fadeIn('fast');
     });  
       
    // Ikoner - historiske bilder
	
	$('.big-image').click(function(){
    	$(this).hide();
    	$('.small-image').show();
    	$('.historical-image').addClass('slide-in');
    	$('.historical-image').css("z-index", "3");
	});
	
	$('.small-image').click(function(){
    	$(this).hide();
    	$('.big-image').show();
    	$('.historical-image').removeClass('slide-in');
    //	$('.historical-image').addClass('slide-out');
    	$('.info').removeClass('slide-out');
	});
	
    // Reload siden hvis ingen bruker den
    	
    $.idleTimer(120000);
    

    $(document).bind("idle.idleTimer", function() {
        if ($('#items').is(':visible') || $('#history').is(':visible')) {
            location.reload();
        }    
    });
      
});