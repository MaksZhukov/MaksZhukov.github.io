$(function () {
  $(document).ready(function () {
    var mainslide = $('.main_slider').slick({
      dots: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      arrow: false
    });
    mainslide.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var slide = $(this).find('.slide').eq(nextSlide);
      slide.find('h2').addClass('animated bounceInDown');
      slide.find('h1').addClass('animated bounceInDown');
      slide.find('a').addClass('animated bounceInUp');
      setTimeout(function () {
        slide.find('h2').removeClass('animated bounceInDown');
        slide.find('h1').removeClass('animated bounceInDown');
        slide.find('a').removeClass('animated bounceInUp');
      }, 1000);
    });
    $('.testimonals_slider').slick({
      dots: true,
      arrow: false
    });
    $('.btn_collapse_menu').click(function () {
      console.log('heloo');
      $('.subheader .menu').toggle();
    });
    $("#toTop").click(function (event) {
      $("html, body").animate({scrollTop: 0}, "slow");
      return false;
    });
    $(window).scroll(function (event) {
      if (window.scrollY > 300) {
        $("#toTop").fadeIn('slow');
      }
      else {
        $("#toTop").fadeOut('slow');
      }
    });
      var myMap;
    if ($('*').is('#map')) {
      ymaps.ready(init);
    }

      function init() {
        myMap = new ymaps.Map('map', {
          center: [53.90832607, 27.60767200],
          zoom: 14
        }, {
          searchControlProvider: 'yandex#search'
        });
        myMap.geoObjects
        .add(new ymaps.Placemark([53.90832607, 27.60767200], {
          iconCaption: 'Ботаническая улица, 10'
        }, {
          preset: 'islands#redDotIcon',
          iconCaptionMaxWidth: '300'
        }));
        myMap.behaviors.disable("scrollZoom");

      }
    });

});