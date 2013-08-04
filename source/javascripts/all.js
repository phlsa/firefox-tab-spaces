//= require_tree .

$(document).ready( function() {
	$('.switcher').click( function( e ) {
    $('.all-tabs').toggleClass( 'overview' );
  });

  $('img').click( function( e ) {
    var el = $( e.currentTarget );
    $('img').removeClass('active');
    el.addClass('active');
    $('.all-tabs').removeClass('overview');
  });
});
