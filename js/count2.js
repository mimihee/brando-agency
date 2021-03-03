;(function($, window, document){

    var c2  = [0,0,0,0];
    var d2  = [105,185,350];
    var t2  = [95.2380952,54.0540541,28.57142857];
    var id2 = [0,0,0,0];

    
    $('.s9CountNum').each(function(idx){
        id2[idx] = setInterval(function(){
            countFn(idx); 
        },t2[idx]);
    });

    function countFn(x){
        c2[x]++;
        if(c2[x]<=d2[x]){
            $('.s9CountNum').eq(x).text(c2[x]);
        }
        else{
            clearInterval(id2[x]);
        }
    }


})(jQuery, window, document);
//count2.js