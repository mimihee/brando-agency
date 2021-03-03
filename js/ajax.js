(function($,window,document,undefined){
    
    var timeId = 0;

    $('#submit').on({
        click: function(event){
            event.preventDefault();

            $('.ajax-loder').addClass('addLoader');
            timeId = setTimeout(function(){

            },1000);

            var txtName = $('#name').val().trim();
            var txtMail = $('#mail').val().trim();
            var txtIntr = $('#interest').val().trim();
            var txtMesg = $('#message').val().trim();


            spaceDelReg = /(^\s*)|(\s*$)/g;
			resultname = txtName.replace( spaceDelReg,'' );
			resultMail = txtMail.replace( spaceDelReg,'' );
			resultMesg = txtMesg.replace( spaceDelReg,'' );


			nameReg = /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]{2,50}$/g; //한글영문포함 2자이상~50자이내
			emailReg = /^[A-Za-z0-9]+([\-\_\.]?[A-Za-z0-9])*@[A-Za-z0-9]+([\-\_\.]?[A-Za-z0-9])*[A-Za-z0-9]+$/gi;
			messageReg = /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]{2,50}$/g; //한글영문포함 2자이상~50자이내
            
            if( !nameReg.test( txtName ) ){
                $('#name').addClass('addError');
            }
            else{
                $('#name').removeClass('addError');
            }
            if( !emailReg.test( txtMail ) ){
                $('#mail').addClass('addError');
            }
            else{
                $('#mail').removeClass('addError');
            }
            if( txtIntr == '' ){
                $('#interreste').addClass('addError');
            }
            else{
                $('#interreste').removeClass('addError');
            }

            if( !messageReg.test( txtMesg ) ){
                $('#message').addClass('addError');
            }
            else{
                $('#message').removeClass('addError');
            }

            if( !nameReg.test( resultname ) || !emailReg.test( resultMail ) || !messageReg.test( resultMesg ) ){
                $('.errors').addClass('addError');
                return false;
            }
            else{
                $('.errors').removeClass('addError');
                $('.errors').removeClass('addError');
					
                $.ajax({
                    url:'./contactForm.php',
                    type:'POST',
                    data:{
                        name		: txtName,
                        mail        : txtMail,
                        interest  : txtIntr,
                        message     : txtMesg
                    },
                    success:	function(data){
                        $('.errors').removeClass('addError');
                        $('.success').addClass('addSuccess');
                        
                        $('.success div').append(data);
                        
                        $('#name').val('');
                        $('#mail').val('');			
                        $('#interest option').eq(0).prop('selected', true);
                        $('#message').val('');
                    },
                    error:	function(){
                        alert('AJAX 지원이 안됩니다. SERVER에서 이용해주세요.');
                    }
                });



            }
                

        }
    });

})(jQuery,window,document);
//ajax.js