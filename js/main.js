 
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top-10}, 1500);
  });
});

$(document).ready(function(){
    $('.first-slide').slick({
        slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      infinite: true,
      responsive: [
    {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6
        }
    },
    {
        breakpoint: 1270,
        settings: {
          slidesToShow: 5
        }
    },
    {
      breakpoint: 1024,
        settings: {
          slidesToShow: 4
        } 
    },
    {
      breakpoint: 768,
        settings: {
          slidesToShow: 3
        } 
    },
    {
      breakpoint: 670,
        settings: {
          slidesToShow: 2
        }   
    }]
  });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
  $('.second-slide').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
    {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6
        }
    },
    {
        breakpoint: 1270,
        settings: {
          slidesToShow: 5
        }
    },
    {
      breakpoint: 1024,
        settings: {
          slidesToShow: 4
        } 
    },
    {
      breakpoint: 768,
        settings: {
          slidesToShow: 3
        } 
    },
    {
      breakpoint: 670,
        settings: {
          slidesToShow: 2
        }   
    }]
  });
})

});
