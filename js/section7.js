(function($, window, document){

    var s7T=0;

    $(window).scroll(function(){
        if( $(window).scrollTop() >=200 ){
            if( s7T==0 ){
                s7T=1;
                timeBarFn();
            }
        }
        else{
            s7T=0;
            timeBarFormatFn();
        }
    });


    function timeBarFn(){
        $('.timeBar').eq(0).stop().animate({ width:'80%' },800);
        $('.timeBar').eq(1).stop().animate({ width:'90%' },800);
        $('.timeBar').eq(2).stop().animate({ width:'95%' },800);
        $('.timeBar').eq(3).stop().animate({ width:'90%' },800);
     
    }
    timeBarFn();

    function timeBarFormatFn(){
        $('.timeBar').stop().animate({ width:0 },800);
    }
    timeBarFormatFn();


})(jQuery, window, document);
//section7.js