$(document).ready(function () {
  // $('.mobile-second-toggle').click(function (e) {
  //   e.preventDefault()
  //   $('.header-mobile-second').addClass('opened')
  // })

  // $('.mobile-lang-toggle').click(function (e) {
  //   e.preventDefault()
  //   $('.header-mobile-lang').addClass('opened')
  // })

  // $('.menu-back-link').click(function () {
  //   $(this).closest('.js-header-mobile').removeClass('opened')
  // })

  // $('.mobile-third-toggle').click(function (e) {
  //   e.preventDefault()
  //   $(this).siblings('.header-mobile-third').addClass('opened')
  // })

  $('.program-options-block-tabs a').click(function (e) {
    e.preventDefault()
    var $searchId = $($(this).attr('href'))
    $(this)
      .parents('.program-options-block-tabs')
      .find('a')
      .not($(this))
      .removeClass('active')
    $(this).addClass('active')
    $(this)
      .parents('.program-tabs-content')
      .find('.program-options-block')
      .not($searchId)
      .css('display', 'none')
    $searchId.css('display', 'block')
  })
})
