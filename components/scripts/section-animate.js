var $middle = $('.middle');
var $web = $('.web');
var $game = $('.game');

(function() {
        $web.hide();
        $game.hide();
})();

$('#intro-web-button').on('click', function() {
        $middle.addClass('animated');
        $game.hide();
        $web.show();        
        $middle.addClass('slideOutRight');
        $middle.bind('oanimationend animationend webkitAnimationEnd', function() {
                $middle.css("display", "none");
        });
});

$('#intro-game-button').on('click', function() {
        $middle.addClass('animated');
        $web.hide();
        $game.show();
        $middle.addClass('slideOutLeft');
        $middle.bind('oanimationend animationend webkitAnimationEnd', function() {
                $middle.css("display", "none");
        });
});
