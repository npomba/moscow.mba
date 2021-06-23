if ($('.accordion-block').length) {
  $('.accordion-block').click(function () {
    if ($(window).width() > '767') {
      $('.accordion-block').not($(this)).removeClass('opened')
      $('.accordion-content')
        .not($(this).find('.accordion-content'))
        .slideUp(300)
      $(this).toggleClass('opened')
      $(this).find('.accordion-content').slideToggle(300)
    } else {
      $(this).toggleClass('opened')
      $(this).find('.accordion-content').slideToggle(300)
    }
  })
}
