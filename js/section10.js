(function($, window, document){

    $('#section10 ul li').each(function(idx){
		$(this).on({
			mouseenter: function(){
				z=idx;
                sec10FormatFn();
			},
			mouseleave: function(){
                sec10FormatFn();
			}
		});
	});
	
	function sec10FormatFn(){
		$('#section10 ul li div > .content:before').eq(z).stop().animate({ top:'-100%' },500);
	}

	
	function sec10FormatFn(){
		$('#section10 ul li div > .content:before').eq(z).stop().animate({ top:0  },500);
	}	

	
    
})(jQuery, window, document);
//section10.js