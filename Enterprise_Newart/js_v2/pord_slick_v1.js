$(function(){
  $('.variable-width').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });
});