$(document).ready(function(){
    $(".tweet").addClass("none");

    $(".fav").click(function(){
        $(this).css("color","rgb(238, 24, 95)")
        $(this).removeClass("far");
        $(this).addClass("fas");
    });
    $(".rt").click(function(){
        $(this).css("color","rgb(48, 185, 48)");
    });

    $("#inp").click(function(){
        $(".mid-tweet").css("cursor","pointer");
        $(".mid-tweet").css("opacity","1");
    });

   

    $(".mid-tweet").click(function(){
        var inpVal = $(".inp").val();

        $(".tweet").removeClass("none");
        $(".tweet").addClass("flx");
        $(".content-2").html(inpVal);
        $(".content-2").html(inpVal);

        first = inpVal.slice(0, inpVal.indexOf(" "));
        $(".gc-1").html(first);
        $(".s-1").html("1 Tweet");

        $(".inp").val("");

    });

    $('.inp').keypress(function(e){
        if (e.which == 13) {
          $('.mid-tweet').click();
          return false;   
        }
      });

    $(".follow").click(function(){
        $(this).css("background","#00acee");
        $(this).css("color","white");
        $(this).html("Following");
    });  

});