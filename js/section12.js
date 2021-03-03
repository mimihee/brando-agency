(function($, window, document){

    $('.sec12-list').each(function(idx){
		$(this).on({
			mouseenter: function(){
				z=idx;
				sec12AniFn();
			},
			mouseleave: function(){
				sec12FormatFn();
			}
		});
	});
    
    
	function sec12FormatFn(){
		$('#section12 .content').eq(z).children().stop().animate({ left:0 },300);
	}

	
	function sec12AniFn(){
		$('#section12 .content').eq(z).children().stop().animate({ left:5+'%'  },400);
	}	


})(jQuery, window, document);
//section12.js