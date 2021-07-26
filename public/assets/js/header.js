$(document).ready(function () {
  /*Табы программ в шапке*/
  $('.header-podmenu-tabs a.headerMenuTabs').mouseenter(function () {
    var $searchId = $($(this).data('tab'))
    $('.header-podmenu-tabs a').not($(this)).removeClass('active-tab')
    $(this).addClass('active-tab')
    $('.header-podmenu-content').not($searchId).css('display', 'none')
    $searchId.css('display', 'flex')
  })

  /*работа подменю в десктопе*/

  $(document).mouseup(function (e) {
    var container = $('header')
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.header-podmenu').fadeOut(300)
      // $('.header-overlay').fadeOut(300)
      $('.header-podmenu-toggle').removeClass('opened')
      $('.main-content').removeClass('show-overlay')
      $('.sticky-bottom-part').removeClass('show-overlay')
      $('html').removeClass('non-overflow')
    }
  })

  $(
    '.header-overlay, .header-podmenu-content .program-directions-list a, .header-podmenu-premium a, .header-podmenu-tabs a'
  ).click(function () {
    $('.header-podmenu').fadeOut(300)
    $('.header-mobile-podmenu').fadeOut(300)
    $('.header-overlay').fadeOut(300)
    $('.header-podmenu-toggle').removeClass('opened')
    $('.main-content').toggleClass('show-overlay')
    $('.sticky-bottom-part').toggleClass('show-overlay')
  })

  $('.main-logo, .header-menu a').click(function () {
    $('.header-podmenu').fadeOut(300)
    $('.header-mobile-podmenu').fadeOut(300)
    $('.header-overlay').fadeOut(300)
    $('.header-podmenu-toggle').removeClass('opened')
    $('.main-content').removeClass('show-overlay')
    $('.sticky-bottom-part').removeClass('show-overlay')
    $('html').removeClass('non-overflow')
  })

  $(
    '.mobileAllProgramsLink, .main-logo, .header-menu a, .program-options-block-list a, #switchToRuBtn, #switchToEnBtn, .onClickCloseMobileMenu'
  ).click(function () {
    $('.header-mobile-podmenu').fadeOut(300)
    $('.header-buter').removeClass('opened')
    $('html').removeClass('non-overflow')
  })

  /*работа подменю в мобилке*/
  $('.header-buter').click(function () {
    $(this).toggleClass('opened')
    $('html').toggleClass('non-overflow')
    $('.header-mobile-podmenu').slideToggle(300, function () {
      $('.js-header-mobile').removeClass('opened')
    })
  })

  $('.mobile-second-toggle').click(function (e) {
    e.preventDefault()
    $('.header-mobile-second').addClass('opened')
  })

  $('.mobile-lang-toggle').click(function (e) {
    e.preventDefault()
    $('.header-mobile-lang').addClass('opened')
  })

  $('.menu-back-link').click(function () {
    $(this).closest('.js-header-mobile').removeClass('opened')
  })

  $('.mobile-third-toggle').click(function (e) {
    e.preventDefault()
    $(this).siblings('.header-mobile-third').addClass('opened')
  })

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

  /*Табы цен программ для мобилки*/
  // $('.program-price-tabs a').click(function (e) {
  //   e.preventDefault()
  //   var $searchId = $($(this).attr('href'))
  //   $('.program-price-tabs a').not($(this)).removeClass('active')
  //   $(this).addClass('active')
  //   $('.program-price-block').not($searchId).css('display', 'none')
  //   $searchId.css('display', 'block')
  // })
})
