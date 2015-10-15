$(document).ready(function(){
    
/*
    $(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });
*/
    
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
    
    $('#home-icon').click(reset);
      
    // Tekster til gjenstandene

    $('.sveipa-beholder').click(function(){
		$( objectTexts ).hide();
		$('.sveipa-beholder-text').fadeIn('slow');
	});
	
	$('.komagerband').click(function(){
		$( objectTexts ).hide();
		$('.komagerband-text').fadeIn('slow');
	});
    
    $('.grindvev').click(function(){
		$( objectTexts ).hide();
		$('.komagerband-text').fadeIn('slow');
	});
	
	$('.boks').click(function(){
		$( objectTexts ).hide();
		$('.boks-text').fadeIn('slow');
	});
	
	$('.finsk-bibel').click(function(){
		$( objectTexts ).hide();
		$('.finsk-bibel-text').fadeIn('slow');
	});
	
	$('.komager').click(function(){
		$( objectTexts ).hide();
		$('.komager-text').fadeIn('slow');
	});
	
	$('.lille-katekismen').click(function(){
		$( objectTexts ).hide();
		$('.lille-katekismen-text').fadeIn('slow');
	});
	
	$('.benkekarde').click(function(){
		$( objectTexts ).hide();
		$('.benkekarde-text').fadeIn('slow');
	});
	
	$('.tobakkspung').click(function(){
		$( objectTexts ).hide();
		$('.tobakkspung-text').fadeIn('slow');
	});
	
	$('.tjaere-kopp').click(function(){
		$( objectTexts ).hide();
		$('.tjaere-kopp-text').fadeIn('slow');
	});
	
	$('.bortre').click(function(){
		$( objectTexts ).hide();
		$('.bortre-text').fadeIn('slow');
	});
	
	$('.lagga-beholder').click(function(){
		$( objectTexts ).hide();
		$('.lagga-beholder-text').fadeIn('slow');
	});

    $('.det-nye-testamentet').click(function(){
		$( objectTexts ).hide();
		$('.det-nye-testamentet-text').fadeIn('slow');
	});

      
    // Ikoneer - historiske bilder
	
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
	
	var infoSections = $('#history, #front');
	
$.idleTimer(120000);
    

    $(document).bind("idle.idleTimer", function(){
        location.reload();
    });

      
});