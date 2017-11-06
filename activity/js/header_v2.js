/*---1111囤貨節頁面使用JS---*/

$(function(){
  // header
  var header_html = "";
  header_html += '<div class="header_mid">'
  header_html += '<a href="/">'
  header_html += '<img src="images/NEWART_header.png" class="header_logo_img">'
  header_html += '</a>'
  header_html += '</div>'
  $(".header_wrap").html(header_html);
  // 輪播圖
  var slick_obj = {
                    "slider_bn_1" : {
                                      "class_name" : "slider_bn",
                                      "href_path" : "https://goo.gl/q54o7q",
                                      "img_path" : "images/768x375-01.jpg"
                                    },
                    "slider_bn_2" : {
                                      "class_name" : "slider_bn",
                                      "href_path" : "https://goo.gl/2nBNA1",
                                      "img_path" : "images/768x375-02.jpg"
                                    },
                    "slider_bn_3" : {
                                      "class_name" : "slider_bn",
                                      "href_path" : "https://goo.gl/N5gCCF",
                                      "img_path" : "images/768x375-03.jpg"
                                    },
                    "slider_bn_4" : {
                                      "class_name" : "slider_bn",
                                      "href_path" : "https://goo.gl/jXgcvk",
                                      "img_path" : "images/768x375-04.jpg"
                                    },
                    "slider_bn_5" : {
                                      "class_name" : "slider_bn",
                                      "href_path" : "https://goo.gl/NTQZwj",
                                      "img_path" : "images/768x375-05.jpg"
                                    }
                  }
  var slick_html = "";
  slick_html += '<div class="block_model">'
  slick_html += '<section class="regular slider inner_box">'
  $.each(slick_obj,function(key,value){
    slick_html += '<div class="' + value.class_name + '">'
    slick_html += '<a href="' + value.href_path + '">'
    slick_html += '<img src="' + value.img_path + '">'
    slick_html += '</a>'
    slick_html += '</div>'
  });
  slick_html += '</section>'
  slick_html += '</div>'
  $(".big_bn_wrap").html(slick_html);
});

$(function(){
  var discount_obj = {
                        "gift_box_1" : {
                                       "href_path" : "https://goo.gl/FFqPNL",
                                       "img_path" : "images/1.jpg"
                                      },
                        "gift_box_2" : {
                                       "href_path" : "https://goo.gl/TKfP2Z",
                                       "img_path" : "images/2.jpg"
                                      },
                        "gift_box_3" : {
                                       "href_path" : "https://goo.gl/XPRDhJ",
                                       "img_path" : "images/3.jpg"
                                      },
                        "gift_box_4" : {
                                       "href_path" : "https://goo.gl/S1qaQQ",
                                       "img_path" : "images/4.jpg"
                                      },
                        "gift_box_5" : {
                                       "href_path" : "https://goo.gl/R8hLX9",
                                       "img_path" : "images/5.png"
                                      },
                        "gift_box_6" : {
                                       "href_path" : "https://goo.gl/5tnQUa",
                                       "img_path" : "images/6.png"
                                      },
                        "gift_box_7" : {
                                       "href_path" : "https://goo.gl/mVgkrq",
                                       "img_path" : "images/7.jpg"
                                      },
                        "gift_box_8" : {
                                       "href_path" : "https://goo.gl/UrFDBN",
                                       "img_path" : "images/8.jpg"
                                      },
                        "gift_box_9" : {
                                       "href_path" : "https://goo.gl/yuLtPr",
                                       "img_path" : "images/9.jpg"
                                      },
                        "gift_box_10" : {
                                       "href_path" : "https://goo.gl/AZf4N6",
                                       "img_path" : "images/10.jpg"
                                      },
                        "gift_box_11" : {
                                       "href_path" : "https://goo.gl/sFh1sv",
                                       "img_path" : "images/11.jpg"
                                      },
                        "gift_box_12" : {
                                       "href_path" : "https://goo.gl/uYdYyu",
                                       "img_path" : "images/all_12.jpg"
                                      }
                      }
  var gift_box_html = "";
  gift_box_html += '<a href="https://goo.gl/UuaufG" id="anchor_1">'
  gift_box_html += '<img src="images/750x140-02.jpg">'
  gift_box_html += '</a>'
  gift_box_html += '<ul>'
  $.each(discount_obj,function(key,value){
    gift_box_html += '<li class="col-xs-6 p-r-0 p-l-0 p-t-0 p-b-0">'
    gift_box_html += '<a href="' + value["href_path"] + '">'
    gift_box_html += '<img src="' + value["img_path"] + '">'
    gift_box_html += '</a>'
    gift_box_html += '</li>'
  });
  gift_box_html += '<li class="clear"></li>'
  gift_box_html += '</ul>'
  $(".article_1").html(gift_box_html);
});

$(function(){
  var table_obj = {
                    "table_1" : { 
                                  "table" : "1",
                                  "table_id" : "table_1",
                                  "table_img_path" : [ "images/120x120_table01_0.jpg",
                                                        "images/120x120_table01_1.png",
                                                        "images/not_yet_started_0.png",
                                                        "images/not_yet_started_1.png"],
                                  "prod_items" : {
                                                  "2017-11-01" : {
                                                                    "days_id" : "1",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/Svn2Z2",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_1.jpg"]
                                                                  },
                                                  "2017-11-02" : {
                                                                    "days_id" : "2",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/naLGpQ",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_2.jpg"]
                                                                  },
                                                  "2017-11-03" : {
                                                                    "days_id" : "3",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/k8XVPN",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_3.jpg"]
                                                                  },
                                                  "2017-11-04" : {
                                                                    "days_id" : "4",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/9bTddR",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_4.jpg"]
                                                                  },
                                                  "2017-11-05" : {
                                                                    "days_id" : "5",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/478CKo",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_5.jpg"]
                                                                  },
                                                  "2017-11-06" : {
                                                                    "days_id" : "6",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/8i2RGu",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_6.jpg"]
                                                                  },
                                                  "2017-11-07" : {
                                                                    "days_id" : "7",
                                                                    "table" : "1",
                                                                    "table_id" : "table_1",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/QrdiXL",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_7.jpg"]
                                                                  }
                                                 }
                                },
                    "table_2" : {
                                  "table" : "2",
                                  "table_id" : "table_2",
                                  "table_img_path" : [ "images/120x120_table02_0.jpg",
                                                       "images/120x120_table02_1.png",
                                                       "images/not_yet_started_0.png",
                                                       "images/not_yet_started_1.png"],
                                  "prod_items" : {
                                                  "2017-11-08" : {
                                                                    "days_id" : "8",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/MpnADw",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_8.jpg"]
                                                                  },
                                                  "2017-11-09" : {
                                                                    "days_id" : "9",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/axovUt",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_9.jpg"]
                                                                  },
                                                  "2017-11-10" : {
                                                                    "days_id" : "10",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/tSQ9jb",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_10.jpg"]
                                                                  },
                                                  "2017-11-11" : {
                                                                    "days_id" : "11",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/t71zdE",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_11.jpg"]
                                                                  },
                                                  "2017-11-12" : {
                                                                    "days_id" : "12",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/7Raaya",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_12.jpg"]
                                                                  },
                                                  "2017-11-13" : {
                                                                    "days_id" : "13",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/5DLg6N",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_13.jpg"]
                                                                  },
                                                  "2017-11-14" : {
                                                                    "days_id" : "14",
                                                                    "table" : "2",
                                                                    "table_id" : "table_2",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/3xXdBU",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_14.jpg"]
                                                                  }
                                                 }
                                },
                    "table_3" : {
                                  "table" : "3",
                                  "table_id" : "table_3",
                                  "table_img_path" : [ "images/120x120_table03_0.jpg",
                                                       "images/120x120_table03_1.png",
                                                       "images/not_yet_started_0.png",
                                                       "images/not_yet_started_1.png"],
                                  "prod_items" : {
                                                  "2017-11-15" : {
                                                                    "days_id" : "15",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/WFqV5b",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_15.jpg"]
                                                                  },
                                                  "2017-11-16" : {
                                                                    "days_id" : "16",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/71nvYR",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_16.jpg"]
                                                                  },
                                                  "2017-11-17" : {
                                                                    "days_id" : "17",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/tnzk4V",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_17.jpg"]
                                                                  },
                                                  "2017-11-18" : {
                                                                    "days_id" : "18",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/HwGeiD",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_18.jpg"]
                                                                  },
                                                  "2017-11-19" : {
                                                                    "days_id" : "19",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/hEUHN2",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_19.jpg"]
                                                                  },
                                                  "2017-11-20" : {
                                                                    "days_id" : "20",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/3Fn6Yk",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_20.jpg"]
                                                                  },
                                                  "2017-11-21" : {
                                                                    "days_id" : "21",
                                                                    "table" : "3",
                                                                    "table_id" : "table_3",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/q1tNNL",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_21.jpg"]
                                                                  }
                                                 }
                                },
                    "table_4" : {
                                  "table" : "4",
                                  "table_id" : "table_4",
                                  "table_img_path" : [ "images/120x120_table04_0.jpg",
                                                       "images/120x120_table04_1.png",
                                                       "images/not_yet_started_0.png",
                                                       "images/not_yet_started_1.png"],
                                  "prod_items" : {
                                                  "2017-11-22" : {
                                                                    "days_id" : "22",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/SJpVau",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_22.jpg"]
                                                                  },
                                                  "2017-11-23" : {
                                                                    "days_id" : "23",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/xE5beU",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_23.jpg"]
                                                                  },
                                                  "2017-11-24" : {
                                                                    "days_id" : "24",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/noupfG",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_24.jpg"]
                                                                  },
                                                  "2017-11-25" : {
                                                                    "days_id" : "25",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/MQHKCe",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_25.jpg"]
                                                                  },
                                                  "2017-11-26" : {
                                                                    "days_id" : "26",
                                                                    "table" : "4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/2t734E",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_26.jpg"]
                                                                  },
                                                  "2017-11-27" : {
                                                                    "days_id" : "27",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/bL2TT9",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_27.jpg"]
                                                                  },
                                                  "2017-11-28" : {
                                                                    "days_id" : "28",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/ABvrp7",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_28.jpg"]
                                                                  },
                                                  "2017-11-29" : {
                                                                    "days_id" : "29",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/LYCPWm",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_29.jpg"]
                                                                  },
                                                  "2017-11-30" : {
                                                                    "days_id" : "30",
                                                                    "table" : "4",
                                                                    "table_id" : "table_4",
                                                                    "class_name" : "days_",
                                                                    "href_path" : "https://goo.gl/Ea8Hvv",
                                                                    "img_path" : ["images/not_yet_started_0.png",
                                                                                  "images/not_yet_started_1.png",
                                                                                  "images/750x300_30.jpg"]
                                                                  }
                                                 }
                                }
                  }
  var date = new Date().toISOString().slice(0,10);
  var days = new Date().getDate();

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
  $(".article_2_table").html(table_html);

  // content
  var content_html = "";
  $.each(table_obj,function(key,value){
    content_html += '<ul id="' + key + '" class="table_position">'
    $.each(value["prod_items"],function(key,value){
      content_html += '<li>'
      content_html += '<div class="not_yet_started ' + value.class_name + value.days_id + '">'
      content_html += '<img src="' + value.img_path[0] + '">'
      content_html += '</div>'
      content_html += '<a href="' + value.href_path + '">'
      content_html += '<img src="' + value.img_path[2] + '">'
      content_html += '</a>'
      content_html += '</li>'
    });
    content_html += '</ul>'
  });
  $(".article_2_contents").html(content_html);
  // 點擊table做換圖加底色
  $("#bar a").click(function(){
    // reset
    $(".tab_contents ul").hide();
    $(".controls a").each(function(){
      $(this).css("background","#ffffff");
    });
    $(".table_img").each(function(){ 
      var file = $(this).attr("file_name");
      $(this).attr("src",'images/'+file+"0.jpg");
    });
    // active
    $($(this).attr("href")).show();
    $(this).css("background","#c30d22");
    var file_name = $("img",this).attr("file_name");
    $("img",this).attr("src","images/"+file_name+"1.png");
    $('html,body').animate({scrollTop:$($(this).attr("href")).offset().top+-122+"px"},800);
    return false;
  });
  // reset
  $(".tab_contents ul").hide();
  $("#table_1").show();
  $(".table_1 a").css("background","#c30d22");
  $(".table_1 a img").attr("src","images/120x120_table01_1.png");
  // 以系統日期抓資料做換圖及關閉遮罩
  $.each(table_obj,function(key,value){
    if (!$.isEmptyObject(value["prod_items"][date])) {
      $("."+(value["prod_items"][date]["class_name"] + value["prod_items"][date]["days_id"])).hide();
      if (days > 1) {
        for (var i = 1; i < days; i++) {
          $(".days_"+i).children("img").attr("src",value["table_img_path"][3]);
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
            $(this).attr("src",'images/'+file+"0.jpg");
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

$(function(){
  // 怎麼買最划算
  var FB_content_html = "";
  FB_content_html += '<a href="#" id="anchor_3">'
  FB_content_html += '<img src="images/750x140-05.jpg" >'
  FB_content_html += '</a>'
  FB_content_html += '<ul class="m-t-20">'
  FB_content_html += '<li class="ta-c">'
  FB_content_html += '<div class="fb-video" data-href="https://www.facebook.com/newartshop/videos/1423797464340389/" data-width="310" data-show-text="true"><blockquote cite="https://www.facebook.com/newartshop/videos/1423797464340389/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/newartshop/videos/1423797464340389/"></a><p>NEWART 聽見你頭髮的聲音 [產品製造*安心保證] 製造工廠☛&quot;昇宏集團&quot;化妝品GMP廠 / CNS 22716 (國家標準驗證品質管理) 給予消費者最高規格的研發生產過程。NEWART全系列商品皆由&quot;昇宏集團&quot;提供專業研發、安全製造&quot;並配置NEWART專屬藥師及研發人員 in-house ，都是為了讓消費者使用的更有感，更安心 !</p>由 <a href="https://www.facebook.com/newartshop/">Newart 聽見你頭髮的聲音</a>貼上了 2017年10月24日</blockquote></div>'
  FB_content_html += '</li>'
  FB_content_html += '</ul>'
  // $(".article_3").html(FB_content_html);
  // 加入會員再賺紅利
  var article_4_html = "";
  article_4_html += '<a href="https://goo.gl/2jZ8D3" id="anchor_4">'
  article_4_html += '<img src="images/750x140-01.jpg" >'
  article_4_html += '</a>'
  article_4_html += '<ul class="m-b-20">'
  article_4_html += '<li>'
  article_4_html += '<a href="https://goo.gl/p2NzUA">'
  article_4_html += '<img src="images/768x375_member.jpg">'
  article_4_html += '</a>'
  article_4_html += '</li>'
  article_4_html += '<li class="m-t-10 m-b-10 ta-c">'
  article_4_html += '<iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.newart.com.tw%2Factivity_11&layout=button&size=large&mobile_iframe=true&width=65&height=28&appId" width="65" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
  article_4_html += '</li>'
  article_4_html += '<li>'
  article_4_html += '<img src="images/Description.jpg">'
  article_4_html += '</li>'
  article_4_html += '<li class="col-xs-12 col-sm-6 m-t-5 m-b-5 p-r-5 p-l-5">'
  article_4_html += '<div class="FB_button inner_box btn box_shadow_white">'
  article_4_html += '<img src="images/FB_img.png">'
  article_4_html += '<a href="https://goo.gl/eAyaoK">加入Newart聽見你頭髮的聲音</a>'
  article_4_html += '</div>'
  article_4_html += '</li>'
  article_4_html += '<li class="col-xs-12 col-sm-6 m-t-5 m-b-5 p-r-5 p-l-5">'
  article_4_html += '<div class="line_button inner_box btn box_shadow_white">'
  article_4_html += '<img src="images/line_logo.png">'
  article_4_html += '<a href="https://line.me/R/ti/p/%40ngq1692g">加入LINE@得知最新消息</a>'
  article_4_html += '</div>'
  article_4_html += '</li>'
  article_4_html += '<li class="clear"></li>'
  article_4_html += '</ul>'
  $(".article_4").html(article_4_html);
});

$(function(){
  var footer_obj = {
                      "anchor_1" : {
                                      "class_name" : "ori_img",
                                      "file_name" : "120x120_1_",
                                      "href_path" : "#anchor_1",
                                      "img_path" : ["images/120x120_1_0.jpg",
                                                    "images/120x120_1_1.png"]
                                    },
                      "anchor_2" : {
                                      "class_name" : "ori_img",
                                      "file_name" : "120x120_2_",
                                      "href_path" : "#anchor_2",
                                      "img_path" : ["images/120x120_2_0.jpg",
                                                    "images/120x120_2_1.png"]
                                    },
                      "anchor_3" : {
                                      "class_name" : "ori_img",
                                      "file_name" : "120x120_3_",
                                      "href_path" : "#anchor_3",
                                      "img_path" : ["images/120x120_3_0.jpg",
                                                    "images/120x120_3_1.png"]
                                    },
                      "anchor_4" : {
                                      "class_name" : "ori_img",
                                      "file_name" : "120x120_4_",
                                      "href_path" : "#anchor_4",
                                      "img_path" : ["images/120x120_4_0.jpg",
                                                    "images/120x120_4_1.png"]
                                    },
                      "anchor_5" : {
                                      "class_name" : "ori_img",
                                      "file_name" : "120x120_5_",
                                      "href_path" : "https://goo.gl/Hg5pRX",
                                      "img_path" : ["images/120x120_5_0.jpg",
                                                    "images/120x120_5_1.png"]
                                    }
                    }
  var footer_html = "";
  footer_html += '<ul>'
  $.each(footer_obj,function(key,value){
    footer_html += '<li class="activity_menu_icon">'
    footer_html += '<div class="ta-c">'
    footer_html += '<a href="' +value.href_path+ '">'
    footer_html += '<img src="' +value.img_path[0]+ '" file_name="' +value.file_name+ '" class="ori_img">'
    footer_html += '</a>'
    footer_html += '</div>'
    footer_html += '</li>'
  });
  footer_html += '</ul>'
  $(".footer_menu_wrap").html(footer_html);
  // footer menu_icon點擊換色 20171002增加圖片切換功能
  $(".activity_menu_icon").click(function(){
    // reset
    $(".activity_menu_icon div").removeClass("active");
    $(".ori_img").each(function(){ 
      var file = $(this).attr("file_name");
      $(this).attr("src",'images/'+file+"0.jpg");
    });
    //active
    $(this).children(".activity_menu_icon div").addClass("active");
    var file_name = $("img",this).attr("file_name");
    $("img",this).attr("src","images/"+file_name+"1.png");
    $('html,body').animate({scrollTop:$($("a",this).attr("href")).offset().top+-62+"px"},800);
    return false;
  });
});