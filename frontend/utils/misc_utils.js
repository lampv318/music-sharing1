export const setWindowSize = () => {
  let totalHeight = $(window).height();
  let headerHeight = $('.header').outerHeight();
  let footerHeight = $('.current-track').outerHeight();
  let playlistHeight = $('.new_playlist').outerHeight();
  let nowPlaying = $('.playing').outerHeight();

  let navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
  let artistHeight = totalHeight - (headerHeight + footerHeight);

  $('.navigation').css('height' , navHeight);
  $('.content__middle').css('height' , artistHeight);

  if ($(window).width() <= 768){
    $('.collapse').removeClass('in');
    $('.navigation').css('height' , 'auto');
    $('.artist').css('height' , 'auto');
  }

  if ($(window).width() > 768){
    $('.collapse').addClass('in');
  }
};
