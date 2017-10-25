/*---1111囤貨節頁面使用JS---*/

$(function() {
  // gotop設定
  $(".gotop_icon").hide()  
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

  //footer錨點
  $(".footer_wrap a").click(function(){
    // reset
    $(".footer_wrap a").each(function(){
      $(this).css("background","#ffffff");
    });
    $(".ori_img").each(function(){ 
      var file = $(this).attr("file_name");
      $(this).attr("src",'/images/'+file+"0.jpg");
    });
    // active
    var file_name = $("img",this).attr("file_name");
    $("img",this).attr("src","/images/"+file_name+"1.png");
    $(this).css("background","#c30d22");
    $('html,body').animate({scrollTop:$($(this).attr("href")).offset().top+-62+"px"},800);
    return false;
  });
});

$(function(){
  var table_obj = {
                    "table_1" : { 
                                  "table" : "1",
                                  "table_id" : "table_1",
                                  "table_img_path" : [ "/images/120x120_table01_0.jpg",
                                                        "/images/120x120_table01_1.png"],
                                  "prod_items" : {
                                                  "2017-11-01" : {
                                                                    "days_id" : "1",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_1.jpg"]
                                                                  },
                                                  "2017-11-02" : {
                                                                    "days_id" : "2",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_2.jpg"]
                                                                  },
                                                  "2017-11-03" : {
                                                                    "days_id" : "3",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_3.jpg"]
                                                                  },
                                                  "2017-11-04" : {
                                                                    "days_id" : "4",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_4.jpg"]
                                                                  },
                                                  "2017-11-05" : {
                                                                    "days_id" : "5",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_5.jpg"]
                                                                  },
                                                  "2017-11-06" : {
                                                                    "days_id" : "6",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_6.jpg"]
                                                                  },
                                                  "2017-11-07" : {
                                                                    "days_id" : "7",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_7.jpg"]
                                                                  }
                                                 }
                                },
                    "table_2" : {
                                  "table" : "2",
                                  "table_id" : "table_2",
                                  "table_img_path" : [ "/images/120x120_table02_0.jpg",
                                                       "/images/120x120_table02_1.png"],
                                  "prod_items" : {
                                                  "2017-11-08" : {
                                                                    "days_id" : "8",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_8.jpg"]
                                                                  },
                                                  "2017-11-09" : {
                                                                    "days_id" : "9",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_9.jpg"]
                                                                  },
                                                  "2017-11-10" : {
                                                                    "days_id" : "10",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_10.jpg"]
                                                                  },
                                                  "2017-11-11" : {
                                                                    "days_id" : "11",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_11.jpg"]
                                                                  },
                                                  "2017-11-12" : {
                                                                    "days_id" : "12",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_12.jpg"]
                                                                  },
                                                  "2017-11-13" : {
                                                                    "days_id" : "13",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_13.jpg"]
                                                                  },
                                                  "2017-11-14" : {
                                                                    "days_id" : "14",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_14.jpg"]
                                                                  }
                                                 }
                                },
                    "table_3" : {
                                  "table" : "3",
                                  "table_id" : "table_3",
                                  "table_img_path" : [ "/images/120x120_table03_0.jpg",
                                                       "/images/120x120_table03_1.png"],
                                  "prod_items" : {
                                                  "2017-11-15" : {
                                                                    "days_id" : "15",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_15.jpg"]
                                                                  },
                                                  "2017-11-16" : {
                                                                    "days_id" : "16",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_16.jpg"]
                                                                  },
                                                  "2017-11-17" : {
                                                                    "days_id" : "17",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_17.jpg"]
                                                                  },
                                                  "2017-11-18" : {
                                                                    "days_id" : "18",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_18.jpg"]
                                                                  },
                                                  "2017-11-19" : {
                                                                    "days_id" : "19",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_19.jpg"]
                                                                  },
                                                  "2017-11-20" : {
                                                                    "days_id" : "20",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_20.jpg"]
                                                                  },
                                                  "2017-11-21" : {
                                                                    "days_id" : "21",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_21.jpg"]
                                                                  }
                                                 }
                                },
                    "table_4" : {
                                  "table" : "4",
                                  "table_id" : "table_4",
                                  "table_img_path" : [ "/images/120x120_table04_0.jpg",
                                                       "/images/120x120_table04_1.png"],
                                  "prod_items" : {
                                                  "2017-11-22" : {
                                                                    "days_id" : "22",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_22.jpg"]
                                                                  },
                                                  "2017-11-23" : {
                                                                    "days_id" : "23",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_23.jpg"]
                                                                  },
                                                  "2017-11-24" : {
                                                                    "days_id" : "24",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_24.jpg"]
                                                                  },
                                                  "2017-11-25" : {
                                                                    "days_id" : "25",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_25.jpg"]
                                                                  },
                                                  "2017-11-26" : {
                                                                    "days_id" : "26",
                                                                    "table" : "4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_26.jpg"]
                                                                  },
                                                  "2017-11-27" : {
                                                                    "days_id" : "27",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_27.jpg"]
                                                                  },
                                                  "2017-11-28" : {
                                                                    "days_id" : "28",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_28.jpg"]
                                                                  },
                                                  "2017-11-29" : {
                                                                    "days_id" : "29",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_29.jpg"]
                                                                  },
                                                  "2017-11-30" : {
                                                                    "days_id" : "30",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "img_path" : ["/images/not_yet_started_0.png",
                                                                                  "/images/not_yet_started_1.png",
                                                                                  "/images/750x300_30.jpg"]
                                                                  }  
                                                 }
                                }
                  }
  var date = new Date().toISOString().slice(0,10);
  // var date = "2017-11-02";
  var days = new Date(2017,11,0).getDate();

 // table
  var table_html = "";
  table_html += '<ul id="bar">'
  $.each(table_obj,function(key,value){
    table_html += '<li class="col-xs-3 p-r-0 p-l-0 ta-c '+ value.table_id +'">'
    table_html += '<a href="#' + value.table_id + '">'
    table_html += '<img src="'+ value.table_img_path[0] +'" file_name="120x120_table0' + value.table + '_" class="table_img">'
    table_html += '</a>'
    table_html += '</li>'
  });
  table_html += '<li class="clear"></li>'
  table_html += '</ul>'
  $("nav").html(table_html);

  // content
  var table_content_html = "";
  $.each(table_obj,function(key,value){
    table_content_html += '<ul id="' + key + '" class="table_position">'
    $.each(value["prod_items"],function(key,value){
      table_content_html += '<li>'
      table_content_html += '<div class="not_yet_started ' + value.class_name + value.days_id + '">'
      table_content_html += '<img src="' + value.img_path[0] + '">'
      table_content_html += '</div>'
      table_content_html += '<a href="#">'
      table_content_html += '<img src="' + value.img_path[2] + '">'
      table_content_html += '</a>'
      table_content_html += '</li>'
    });
    table_content_html += '</ul>'
  });
  $(".tab_contents").html(table_content_html);
  // 點擊table做換圖加底色
  $("#bar a").click(function(){
    // reset
    $(".tab_contents ul").hide();
    $(".controls a").each(function(){
      $(this).css("background","#ffffff");
    });
    $(".table_img").each(function(){ 
      var file = $(this).attr("file_name");
      $(this).attr("src",'/images/'+file+"0.jpg");
    });
    // active
    $($(this).attr("href")).show();
    $(this).css("background","#c30d22");
    var file_name = $("img",this).attr("file_name");
    $("img",this).attr("src","/images/"+file_name+"1.png");
    $('html,body').animate({scrollTop:$($(this).attr("href")).offset().top+-147+"px"},800);
    return false;
  });
  // reset
  $(".tab_contents ul").hide();
  $("#table_1").show();
  $(".table_1 a").css("background","#c30d22");
  $(".table_1 a img").attr("src","/images/120x120_table01_1.png");
  // 以系統日期抓資料做換圖及關閉遮罩
  $.each(table_obj,function(key,value){
    if (!$.isEmptyObject(value["prod_items"][date])) {
      $("."+(value["prod_items"][date]["class_name"] + value["prod_items"][date]["days_id"])).hide();
      for (var i = 1; i < days; i++) {
        if (value["prod_items"][date]["days_id"] > i) {
          $(".days_"+i).children("img").attr("src",value["prod_items"][date]["img_path"][1]);
        }
      }
      // 判斷如系統日期等於資料日期當前的table就變色
      $.each(value["prod_items"],function(key){
        if (date = key) {
          // reset
          $(".tab_contents ul").hide();
          $(".controls a").each(function(){
            $(this).css("background","#ffffff");
          });
          $(".table_img").each(function(){ 
            var file = $(this).attr("file_name");
            $(this).attr("src",'/images/'+file+"0.jpg");
          });
          // active
          $(".tab_contents").children("#" + value["prod_items"][date]["table_id"]).show();
          $("." + value["prod_items"][date]["table_id"]).children("a").css("background","#c30d22");
          $("." + value["prod_items"][date]["table_id"]).children("a").children("img").attr("src",value["table_img_path"][1]);
        }
      });
    }
  });  
});