$(document).ready(function() {
    console.log("boop");
    var content = $('.content');
	
    $('#trigger').live('click', function() {
        $(this).toggle(function() {
            $(this).text('Meh. Put it back.');
            content.removeClass('reverse').addClass('running');
        }, function() {
             $(this).text('Check me out!');
            content.removeClass('running').addClass('reverse');
        }).trigger('click');
    });
	
});