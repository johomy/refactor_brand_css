$(function(){
  // fbq('track','ViewContent',{content_type: 'product',content_ids: [prod_id]});
  $("#add_cart").click(function(){
    var cart_obj = {
                    "prod_id" : $("#prod_id").val(),
                    "prod_name" : $("#prod_name").val(),
                    "models_id" : $("#prod_model").val(),
                    "qty" : $("#prod_qty").val(),
                    "deliver_method_id" : $("#prod_delivery").val(),
                    "is_tax" : $("#tax").val()
                   };
    if ($("#prod_model").val() > 0){
      addToCart(cart_obj,0);
    } else {
      alert("商品補貨中");
    }
  });
  $("#checkout_cart").click(function(){
    var cart_obj = {
                    "prod_id" : $("#prod_id").val(),
                    "prod_name" : $("#prod_name").val(),
                    "models_id" : $("#prod_model").val(),
                    "qty" : $("#prod_qty").val(),
                    "deliver_method_id" : $("#prod_delivery").val(),
                    "is_tax" : $("#tax").val()
                   };
    if ($("#prod_model").val() > 0){
      addToCart(cart_obj,1);
    } else {
      alert("商品補貨中");
    }
  });
});
function addToCart(cart_obj,checkout){
  // fbq('track','AddToCart',{content_type: 'product',content_ids: [prod_id]});
  $.ajax({
      cache: false,
      method : "POST",
      url: "/add_cart/",
      dataType : "json",
      data : cart_obj
  }).done(function(msg) {
    var ok = 0;
    if (msg.code == 1){
      ok = 1;
    } else {
      alert("系統忙碌中!請稍等幾秒後再次嘗試一次。");
    }
    if (ok == 1){
      if (checkout == 1){
        top.location.href="/checkout/"+cart_obj.deliver_method_id;
      } else {
        alert("加入購物車完成!");
        top.location.href="/";
        //history.back();
      }
    }
  });
}
// 20171023加購商品計算
$(function(){
  $(".odd_product_content_wrap").each(function(){
    // reset
    var prod_id = $(this).attr("prod_id");
    setTotal(prod_id);
  });
  //active
  $(".prod_model").change(function(){
    var prod_id = $(this).attr("prod_id");
    // console.log(prod_id);
    setTotal(prod_id);
  });
  $(".qty").change(function(){
    var prod_id = $(this).attr("prod_id");
    // console.log(prod_id);
    setTotal(prod_id);
  }); 
});
function setTotal(prod_id){
  var total_price = 0;
  var price = $("option:selected","#prod_model_" + prod_id).attr("unit_price");
  var qty = $("#qty_" + prod_id).val();
  total_price = price * qty;
  $("#ori_price_" + prod_id).html(price);
  $("#total_price_" + prod_id).html(total_price);
  // console.log(prod_id);
  // console.log(price,qty);
}