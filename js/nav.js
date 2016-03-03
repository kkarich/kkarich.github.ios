// fix menu when passed
$('.masthead')
    .visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade down');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade down');
        }
    })
;
var body = $("html, body");

$('.menu a:not(.toc)').click(function () {
    console.log($(this).attr('target'))
    body.stop().animate({ scrollTop: $($(this).attr('target')).position().top }, 'slow', 'swing', function () {
    });
})

$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    $('.segment').each(function (i) {
        if ($(this).position().top <= windscroll + 100) {
            var index = i + 1;
            $('.menu a.active').removeClass('active');
            $('.menu a:nth-child(' + index + ')').addClass('active');
        }
    });
})
            
// create sidebar and attach to menu open
$('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
;

$('.ui.sidebar')
    .sidebar('attach events', '.sidebar.menu a')
;
       