// On Document Load
jQuery(window).load(function () {
  //site loader
  jQuery('#wraploader').hide();
});

// On Document Ready
jQuery(document).ready(function ($) {
  // Full Navigation
  // right menu
  $('#menu-toggle').click(function () {
    $('#site-header-menu').addClass('open').css({
      'transform': 'scale(1)',
      'borderRadius': '0'
    });
  });

  //hide and show search 
  $(".nav-buttons").click(function () {
    $("#top-search").slideToggle("400");
  });


  $('#menu-toggle-close').click(function () {
    if ($('#site-header-menu').hasClass('open')) {
      $('#site-header-menu').removeClass('open').css({
        'transform': 'scale(0)'
      });
    }

  });

  // left menu
  $('#sec-menu-toggle').click(function () {
    $('#sec-site-header-menu').addClass('open').css({
      'transform': 'scale(1)'
    });
  });
  $('#mobile-menu-toggle-close').click(function () {
    if ($('#sec-site-header-menu').hasClass('open')) {
      $('#sec-site-header-menu').removeClass('open').css({
        'transform': 'scale(0)'
      });
    }
  });


  $('h2.widget-title').html(function () {
    return this.innerText.split(' ').map(function (e, i) {
      return $('<span />', {
        class: 'i' + i,
        text: e
      });
    });
  });


  /**
   * sub menu script
   */
  $("li.menu-item-has-children > a").each(function () {
    $(this).append("<i class='fa fa-angle-down'></i>");
  });
  $('li.menu-item-has-children .fa').click(function (e) {
    e.preventDefault();
    $(this).siblings().toggle();
    e.stopPropagation();
  })


  // hoverdir
  jQuery(' #da-thumbs section > li ').each(function () {
    $(this).hoverdir();
  });


  // Search
  var openBox = $('#search-bg');
  $('.search-holder .button-search').click(function (e) {
    e.preventDefault();
    openBox.addClass('search-open');
    openBox.removeClass('screen-reader-text');
  });

  $('.button-search-close').click(function (e) {
    e.preventDefault();
    openBox.removeClass('search-open');
    openBox.addClass('screen-reader-text');
  });

  $('#search-open-submit').click(function () {
    $('#search-target').submit();
  });


  // slick jQuery 
  jQuery('.carousel-group').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // add class to odd and even categories
  $('span.cat-links a:odd').addClass("odd-icon")
  $('span.cat-links a:even').addClass("even-icon")
  // add class to odd and even tag links
  $('span.tags-links a:odd').addClass("tag-odd")
  $('span.tags-links a:even').addClass("tag-even")

  // add class to odd and even tagcloud
  $('.tagcloud a:odd').addClass("odd-tagcloud")
  $('.tagcloud a:even').addClass("even-tagcloud")
  $('.category-link a:even').addClass("odd-cat")

  // back to top animation 
  $('#gotop').click(function () {
    $('body').animate({
      scrollTop: '0px'
    }, 1000);
  });

  // header fix
      
      var fixedBackgroundColor       = '#2d2d2d',
          fixedBackgroundTransparent = 'transparent',
          scrollTopPosition          = $('body').scrollTop(),
          selectedHeader             = $('.wrap-nav'),
          containerselectedHeader    = $('.wrap-nav .container'),
          fixedBackgroundNoSlider    = selectedHeader.hasClass('fixed-nav');
         
          var waypoint = new Waypoint({
            element: selectedHeader,
            offset: '0',
            handler: function(direction) {
              if( "down" == direction ){
                containerselectedHeader.css({'maxWidth':'100%'});
                selectedHeader.addClass('fixed-nav');                
              } else {
                containerselectedHeader.css({'maxWidth':'100%'});
                selectedHeader.removeClass('fixed-nav');    
              }
             
            } 
          });
  // add toggle class to search icon
  $(".nav-buttons.col-md-1").click(function () {
    $("i.fa.fa-search").toggleClass("fa-close");
  });

  // back to top animation

  $('#gotop').click(function () {
    $('body').animate({
      scrollTop: '0px'
    }, 1000);
  });

  $(window).scroll(function () {
    var scrollTopPosition = $('body').scrollTop();
    if (scrollTopPosition > 240) {
      $('#gotop').css({
        'bottom': 25
      });
    } else {
      $('#gotop').css({
        'bottom': -100
      });
    }
  });
});