// Sliders
$(document).ready(function () {
  var slider = document.getElementById('song-progress');

  noUiSlider.create(slider, {
    start: [0],
    range: {
      'min': [0],
      'max': [100]
    }
  });

  var slider = document.getElementById('song-volume');

  noUiSlider.create(slider, {
    start: [100],
    range: {
      'min': [0],
      'max': [100]
    }
  });


  // Tooltips

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Viewport Heights

  $(window).on('resize load', function () {
    let totalHeight = $(window).height();
    let headerHeight = $('.header').outerHeight();
    let footerHeight = $('.current-track').outerHeight();
    let playlistHeight = $('.new_playlist').outerHeight();
    let nowPlaying = $('.playing').outerHeight();

    let navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
    let artistHeight = totalHeight - (headerHeight + footerHeight);

    $('.navigation').css('height', navHeight);
    $('.content__middle').css('height', artistHeight);
  });

  // Collapse Toggles

  $('.navigation__list__header').on('click', function () {
    $(this).toggleClass('active');
  });


  // Media Queries

  $(window).on('resize load', function () {
    if ($(window).width() <= 768) {
      $('.collapse').removeClass('in');
      $('.navigation').css('height', 'auto');
      $('.artist').css('height', 'auto');
    }
  });

  $(window).on('resize load', function () {
    if ($(window).width() > 768) {
      $('.collapse').addClass('in');
    }
  });
});
