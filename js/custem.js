console.log('work');
$(document).ready(function (){
    $('.send').click(function (event){
        event.preventDefault();
        
        var name = $('.name').val(),
            email = $('.email').val(),
            subject = $('.subject').val(),
            message = $('.message').val();
        if(email.length > 5 && email.includes('@') && email.includes('.')){
            console.log("valid email");
        }else{
            console.log(" Not valid email");
        }
    });
});