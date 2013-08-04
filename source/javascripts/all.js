//= require_tree .

$(document).ready( function() {
	$('.switcher').click( function( e ) {
    $('.all-tabs').toggleClass( 'overview' );
  });

  $('.overview img').click( function( e ) {
    $('img').removeClass('active');
    $( e.currentTarget ).addClass('active');
    $('.all-tabs').removeClass('overview');
  });

  $('img').dblclick( function( e ) {
    $('.all-tabs').toggleClass( 'overview' );
  });

  $('.group-thumb').click( function( e ) {
    var g = $(e.currentTarget).attr('data-group');
    $('.tab-group').removeClass('active');
    $('.group-thumb').removeClass('active');
    $('.tab-group[data-group='+g+']').addClass('active');
    $(e.currentTarget).addClass('active');
  });
});
