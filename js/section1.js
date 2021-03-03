(function($, window, document){

	var cnt  = 0;
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();
	var setId = 0;


	function resizeFn(){
		
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();

		$('.mainSlide').css({ width:winW, height:winH });
		
	}
	resizeFn();
	setTimeout(resizeFn,100);
	
	$(window).resize(function(){
		resizeFn();
		setTimeout(resizeFn,100);
	});

	

	function mainSlideFn(){
		$('.mainSlide-wrap').stop().animate({left:-(winW*cnt)},600);
		pageBtnEventFn(cnt);
	};

	
	function nextCountFn(){
		cnt++;
		if(cnt>2){cnt=2;}
		mainSlideFn();
	}

	function prevCountFn(){
		cnt--;
		if(cnt<0){cnt=0}
		mainSlideFn();
	}

	
	function pageBtnEventFn(z){
		$('.pageBtn').removeClass('addPageBtn');
		$('.pageBtn').eq(z).addClass('addPageBtn');		
	}


	$('.pageBtn').each(function(idx){
		$(this).on({
			click: function(){
				cnt=idx;
				mainSlideFn();
				$('.pageBtn').removeClass('addPageBtn');
				$(this).addClass('addPageBtn');
			}
		});
	});

	


	$('.mainSlide-container').swipe({
		swipeLeft: function(){
			if(!$('.mainSlide-wrap').is(':animated')){
				nextCountFn();
			}
		},
		swipeRight: function(){
			if(!$('.mainSlide-wrap').is(':animated')){
				prevCountFn();
			}
		}
	});
	




})(jQuery, window, document);
//section1.js