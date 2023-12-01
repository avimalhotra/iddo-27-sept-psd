$(function(){
    $("#works .btn").click(function(){
        $("#works .btn").removeClass("active")
        $(this).addClass("active");

        if( $(this).text()=="All" ){
           $(".work").fadeIn();
        }
        else if( $(this).text()=="Website" ){
            $(".work").fadeOut(0);
            $(".work:eq(0),.work:eq(1),.work:eq(2)").fadeIn();
        }
        else if( $(this).text()=="Branding" ){
            $(".work").fadeOut(0);
            $(".work:eq(3),.work:eq(4),.work:eq(5)").fadeIn();
        }
    });

    $("nav a").click(function(){
        //e.preventDefault();
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });

    $(".top").click(function(){
        //$(this).animate({width:0,opacity:0});
        $("html,body").animate({scrollTop:0})
    });

    const vh=$(window).height();
    const bh=$("body").height();
    const ts=bh-vh;
    $(window).scroll(function(){
        let y=$(this).scrollTop();
        
        if(y>=ts/2){
            $(".top").fadeIn();
        }
        else{
            $(".top").fadeOut();
        }

    if(y>=$(".wrap-5").offset().top-80){
        $(".wrap-1 nav a").removeClass("active");
        $(".wrap-1 nav li:nth-child(3) a").addClass("active");
    }
    else if(y>=$(".wrap-3").offset().top-80){
        $(".wrap-1 nav a").removeClass("active");
        $(".wrap-1 nav li:nth-child(2) a").addClass("active");
    }
    else{
        $(".wrap-1 nav a").removeClass("active");
        $(".wrap-1 nav li:nth-child(1) a").addClass("active");
    }




    });
    $(".btn-mob").click(function(){
        $(".collapse").slideToggle()
    });


    /* slider */

    $(".reviews").bxSlider({
        controls:false,
        auto:true,
        pause:2000,
        autoHover:true
    });

    $(".signup").click(function(){
        $("body").append('<div class="overlay"></div>');
        $("body").append('<div class="popup"></div>');
        $(".popup").load("form.html");

        $(window).keyup(function(e){
            if( e.which==27){
                $(".overlay,.popup").remove();
            }
        });
        $(".overlay").click(function(){
            $(".overlay,.popup").remove();
        })
    });


})