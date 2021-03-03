;(function($, window, document){
    
    var c  = [0,0,0,0];
    var d  = [785,987,350,166];
    var t  = [12.7388535,10.13171226,28.57142857,60.24096386];
    var id = [0,0,0,0];


    $('.s3CountNum').each(function(idx){
        id[idx] = setInterval(function(){
            countFn(idx); 
        },t[idx]);
    });

    function countFn(z){
        c[z]++;
        if(c[z]<=d[z]){
            $('.s3CountNum').eq(z).text(c[z]);
        }
        else{
            clearInterval(id[z]);
        }
    }

 

})(jQuery, window, document);
//count.js