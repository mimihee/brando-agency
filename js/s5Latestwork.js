;(function($, window, document,undefined){
    
    var latestwork = {
        
                    winW:0,
                    imgW:0,
                    imgH:0,
                    conH:0,
                    rowS:0,
                    colS:0,
                    imgHRate:800/800,
                    n:$('.work-list').length,
                    btnN:0,
                    s:[],
                    h:[],
                    setId:0,
                    
                    init: function(){
                        latestwork.responseFn();
                        latestwork.buttonEvent();
                        latestwork.timer();
                    },
                    responseFn: function(){
                        latestwork.winW = $(window).innerWidth();

                        if( latestwork.winW > 1198 ){
                            latestwork.colS = 4;
                        }
                        else if( latestwork.winW > 990 ){
                            latestwork.colS = 3;
                        }
                        else if( latestwork.winW > 765 ){
                            latestwork.colS = 2;
                        }
                        else {
                            latestwork.colS = 1;
                        }
                        latestwork.imgW = latestwork.winW/latestwork.colS;
                        latestwork.imgH = latestwork.imgW*latestwork.imgHRate;

                        switch(latestwork.btnN){
                            case 0:
                                latestwork.n=8;
                                break;
                            case 1:
                                latestwork.n=5;
                                break;
                            case 2:
                                latestwork.n=5;
                                break;
                            case 3:
                                latestwork.n=5;
                                break;
                            case 4:
                                latestwork.n=5;				
                              
                        }
                        latestwork.rowS = Math.ceil(latestwork.n/latestwork.colS);
                        latestwork.conH = latestwork.imgH*latestwork.rowS;

                        $('.latest-work > .work ').css({ height: latestwork.conH });


                        switch(latestwork.btnN){
                            case 0:
                                latestwork.h = [];
                                latestwork.s = [0,1,2,3,4,5,6,7];
                                break;
                            case 1:
                                latestwork.h = [1,5,7];
                                latestwork.s = [0,2,3,4,6];
                                break;                    
                            case 2:
                                latestwork.h = [2,5,6];
                                latestwork.s = [0,1,3,4,7];
                                break;                    
                            case 3:
                                latestwork.h = [0,3,6];
                                latestwork.s = [1,2,4,5,7];
                                break;                    
                            case 4:
                                latestwork.h = [0,2,7];
                                latestwork.s = [1,3,4,5,6];
                                                  
                        }
                        // HIDE
                        for(i=0; i<latestwork.h.length; i++){
                            $('.work-list').eq(latestwork.h[i]).stop().hide();
                        }
                        //SHOW
                        var k=-1;
                        for( i=0; i<latestwork.rowS; i++){
                            for( j=0; j<latestwork.colS; j++){
                                k++; 
                                if( k>=latestwork.s.length ){  
                                    break;
                                }
                                $('.work-list').eq(latestwork.s[k]).stop().show().animate({ width:(latestwork.imgW), height:(latestwork.imgH), top:(latestwork.imgH*i), left:(latestwork.imgW*j) },300);
                            }
                        }           

                    },//responseFn

                    timer: function(){
                        setTimeout(latestwork.responseFn,100);
                        
                        $(window).resize(function(){
                            clearTimeout(latestwork.setId);
                            latestwork.setId = setTimeout(latestwork.responseFn,100);			
                        });		
                    },//timer

                    //버튼 이벤트
                    buttonEvent: function(){
                        $('.wrokNavBtn').each(function(idx){ 
                            $(this).on({
                                click: function(){
                                    latestwork.btnN = idx;
                                    latestwork.responseFn();
                                    $('.wrokNavBtn').removeClass('addnavBtn');
                                    $(this).addClass('addnavBtn');
                    
                                }
                            });
                        });
                    }//buttonEvent
                    

    };
    latestwork.init(); 


})(jQuery, window, document);
//s5Latestwork.js