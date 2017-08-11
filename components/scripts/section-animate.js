var $middle = $('.middle');
var $web = $('.web');
var $game = $('.game');

(function() {
        $web.hide();
        $game.hide();
})();

$('#intro-web-button').on('click', function() {
        $game.hide();
        $web.show();

        if(!$web.hasClass('animated'))
                $web.addClass('animated');
        if(!$middle.hasClass('animated'))
                $middle.addClass('animated');
        
        /* TRY LEFT OR RIGHT WHEN CONTENT IS IN PLACE */
        if(!$web.hasClass('slideInLeft')){
                $web.addClass('slideInLeft');
        }
        if(!$middle.hasClass('slideOutRight'))
                $middle.addClass('slideOutRight');
        
        $web.one('animationend', function() {
                //$middle.css("display", "none");
                $middle.hide();
                $web.removeClass('slideInLeft');
                $middle.removeClass('slideOutRight');
        });
});

$('#go-right').on('click', function() {
        $middle.show();

        $web.addClass('slideOutLeft');
        $middle.addClass('slideInRight');
})

$('#intro-game-button').on('click', function() {
        $web.hide();
        $game.show();

        if(!$game.hasClass('animated'))
                $game.addClass('animated');
        if(!$middle.hasClass('animated'))
                $middle.addClass('animated');

        if(!$game.hasClass('slideInRight'))
                $game.addClass('slideInRight')
        if(!$middle.hasClass('slideOutLeft'))
                $middle.addClass('slideOutLeft')

        $middle.one('animationend', function() {
                $middle.css("display", "none");
                $game.removeClass('slideInRight');
                $middle.removeClass('slideOutLeft');
        });
});
