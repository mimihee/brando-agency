(function($,window,document,undefined){
    
	var mCnt  = 0;
	var modalwinW = $(window).innerWidth();
	var slideH = 550;
	var setId = 0;
	

	function modalResizeFn(){
		
		modalwinW = $(window).innerWidth();
		$('.modalSlide').css({ width:modalwinW, height:slideH });



		
	}
	modalResizeFn();
	setTimeout(modalResizeFn,100);
	
	$(window).resize(function(){
		modalResizeFn();
		setTimeout(modalResizeFn,100);
	});

	

	function modalMainSlideFn(){
		$('.modalSlide-wrap').stop().animate({left:-(modalwinW*mCnt)},600);
        modalpageBtnEventFn(mCnt);
	};

	
	function modalNextCountFn(){
		mCnt++;
		if(mCnt>2){mCnt=2;}
		modalMainSlideFn();
	}

	function modalPrevCountFn(){
		mCnt--;
		if(mCnt<0){mCnt=0}
		modalMainSlideFn();
	}

	
	function modalpageBtnEventFn(z){
		$('.modalpageBtn').removeClass('addmodalPageBtn');
		$('.modalpageBtn').eq(z).addClass('addmodalPageBtn');		
	}


	$('.modalpageBtn').each(function(idx){
		$(this).on({
			click: function(){
				mCnt=idx;
				modalMainSlideFn();
				$('.modalpageBtn').removeClass('addmodalPageBtn');
				$(this).addClass('addmodalPageBtn');
			}
		});
	});

	
	$('.work-list').each(function(idx){
		$(this).on({
			click:	function(){
				mCnt= idx;	

				$('#modal').css({ display:'block' });
				$('html').addClass('addScroll');
				setTimeout(modalResizeFn,100); 
				
			}
		});
	});



	$('.modalSlide-container').swipe({
		swipeLeft: function(){
			if(!$('.modalSlide-wrap').is(':animated')){
				modalNextCountFn();
			}
		},
		swipeRight: function(){
			if(!$('.modalSlide-wrap').is(':animated')){
				modalPrevCountFn();
			}
		}
	});


	//닫기 버튼 클릭 이벤트
	$('.modalCloseBtn').on({
		click:	function(){
			$('#modal').stop().hide();
			$('html').removeClass('addScroll');
		}
	});


	//모달 자신 클릭 시 모달 닫기
	$('#modal').on({
		click: function(){
			$('#modal').stop().hide();
			$('html').removeClass('addScroll');
		}
	});

	

	// $(window).scroll(function(){
	// 	if( $(this).scrollTop() >=10 ){
	// 		$('.bottom-closeBtn > .modalCloseBtn').stop().fadeIn(1000);
	// 	}
	// 	else{
	// 		$('.bottom-closeBtn > .modalCloseBtn').stop().fadeOut(1000);
	// 	}
	// });



})(jQuery, window, document);
//modal.js