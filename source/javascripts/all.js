//= require_tree .

$(document).ready( function() {
	$('.switcher').click( function( e ) {
    $('.all-tabs').toggleClass( 'overview' );
    setTimeout( function() {
      $('.all-tabs').toggleClass( 'close-possible' );
    }, 500);
    $('.searchfield input').focus();
  });

  $('.overview .tab').click( function( e ) {
    $('.tab').removeClass('active');
    $( e.currentTarget ).addClass('active');
    $('.all-tabs').removeClass('overview');
    $('.all-tabs').removeClass( 'close-possible' );
    $('.searchfield input').focus();
  });

  $('img').dblclick( function( e ) {
    $('.all-tabs').toggleClass( 'overview' );
    setTimeout( function() {
      $('.all-tabs').toggleClass( 'close-possible' );
    }, 500);
    $('.searchfield input').focus();
  });

  $('.group-thumb').click( function( e ) {
    var g = $(e.currentTarget).attr('data-group');
    $('.tab-group').removeClass('active');
    $('.group-thumb').removeClass('active');
    $('.tab-group[data-group='+g+']').addClass('active');
    $(e.currentTarget).addClass('active');
    $('.searchfield input').focus();
  });
});
