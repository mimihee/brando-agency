(function($, window, document){

    
    $('.smoothBtn').on({
        click:	function(event){
            event.preventDefault();	
            
            url = $(this).attr('href');
            $('html,body').stop().animate({ scrollTop: $( url ).offset().top },800);		
        }
    });    


    $(window).scroll(function(){
        if( $(this).scrollTop() >=10 ){
            $('#header').addClass('addFixed');
        }
        else{
            $('#header').removeClass('addFixed');
        }
    });


    $('.mobileBtn').on({
        click:	function(){
            
            $(this).toggleClass('addMobile');
            $('#header').toggleClass('addMobile');
            
        }
    });



})(jQuery, window, document);
//header.js