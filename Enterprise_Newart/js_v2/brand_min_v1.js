$(function() {
  // GoTop
  $(".gotop_icon").hide();
  $(window).scroll(function(){
    if($(this).scrollTop()>1){
      $(".gotop_icon").fadeIn();
    } else {
      $(".gotop_icon").fadeOut();
    }
  });   
  $(".gotop_icon a").click(function(){
    $("html,body").animate({scrollTop:0},400);
    return false;
  });
  // icon_bar
  $(".navbar_toggle").click(function () {
    $(this).toggleClass("transform");
  });
  // hamburger 切換
  $(".hamburger_icon").click(function() {
    $(".content_left").toggle("slide",300);
    $(".content_right").toggle("slide",300);
  });
  // hamburger content
  $("#hamburger_menu li").click(function(){
    // 還原(判斷arrows狀態)
    var status = $(".arrows",this).attr("class");
    var logic = 0;
    if (status == 'arrows arrow-up'){
      logic = 1;
    }
    $("#hamburger_menu .hamburger_title").css("background","#ffffff");
    $(".arrows").removeClass("arrow-down");
    $(".arrows").removeClass("arrow-up");
    $(".arrows").addClass("arrow-down");
    // 動作(判斷arrows狀態)
    var ui_id = $(this).attr("ui_id");
    $(".hamburger_title",this).css("background","#f4f4f4");
    $(".arrows",this).removeClass("arrow-down");
    $(".arrows",this).addClass("arrow-up");
    if (logic){
      $(".arrows",this).removeClass("arrow-up");
      $(".arrows",this).addClass("arrow-down");
    }
    $("#hamburger_menu .hamburger_show").slideUp();
    $("#ui_id_"+ui_id).stop().slideToggle(300);
  });
  // question_menu
  $("#question_menu label").click(function(){
    var question_id = $(this).attr("question_id");
    $("#question_"+question_id).stop().slideToggle(300);
  });
  //directory
  $("#directory_menu li").click(function(){
    // 還原(判斷arrows狀態)
    var status = $(".arrows",this).attr("class");
    var logic = 0;
    if (status == 'arrows arrow-up'){
      logic = 1;
    }
    $(".arrows").removeClass("arrow-down");
    $(".arrows").removeClass("arrow-up");
    $(".arrows").addClass("arrow-down");
    // 動作(判斷arrows狀態)
    var ui_id = $(this).attr("ui_id");
    $(".arrows",this).removeClass("arrow-down");
    $(".arrows",this).addClass("arrow-up");
    if (logic){
      $(".arrows",this).removeClass("arrow-up");
      $(".arrows",this).addClass("arrow-down");
    }
    $("#directory_menu .directory_show").slideUp();
    $("#ui_id_"+ui_id).stop().slideToggle(300);
  });
});