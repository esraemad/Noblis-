// A $( document ).ready() block.
$( document ).ready(function() {
        
    $('.slidertestslick').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
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
    

            $('.inrmainpic img').on({
                mouseover: function () {
                    $(this).css({
                        'cursor': 'hand',
                        'border-Color': 'red'
                    });
                },
                mouseout: function () {
                    $(this).css({
                        'cursor': 'default',
                        'border-Color': 'grey'
                    });
                },
                click: function () {
                    var imageURL = $(this).attr('src');
                    $('.mainpic').fadeOut(500, function () {
                        $(this).attr('src', imageURL);
                    }).fadeIn(500);
                }
            });
        
});
