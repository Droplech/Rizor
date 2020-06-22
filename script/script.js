$('.nav__burger-button').click(function(){
    if(!$('.nav__burger-button').hasClass('active')){
        $('.nav__burger-button').addClass('active');
        $('.nav__burger-button').css('background-color','transparent')
        $('.nav__burger-content').slideDown();
        
    }else{
        $('.nav__burger-button').removeClass('active');
        $('.nav__burger-button').css('background-color','#3A2FF7')
        $('.nav__burger-content').slideUp();
        
    }
})

$(".nav__menu .nav__li, .present__media, .present__left, .specifications__watch").on("click","a",function(event){
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop:top},1500)

    
})

if($(window).width() < 730){
    $(".nav__burger-body").on("click","a",function(event){
        event.preventDefault();
        // let header = parseFloat($(".nav").height())-350
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop:top}, 1500)
    })
}

