window.onload = function () {
    //        导航栏功能
    $('.ymhead-down').on('click', function () {
        $('.ymhead-list').slideToggle();
        $(this).toggleClass('ymhead-down-one');
        $(this).toggleClass('ymhead-down-two');
    });
    $('.ymhead-city').on('click', function () {
        $('.ymhead-city-drop').show();
        $('.ymhead').hide();
        $('.ymhead-list').hide();
        if ($('.ymhead-down').hasClass('ymhead-down-two')) {
            $('.ymhead-down').removeClass('ymhead-down-two');
            $('.ymhead-down').addClass('ymhead-down-one');
        }
    });
    $('.ymhead-city-back').on('click', function () {
        $('.ymhead-city-drop').hide();
        $('.ymhead').show();
    })
    $(".ymhead-list-center>li>a").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {

            var word = $(this).parent().find('a').text();
            $('.ymhead-content').text(word)
        }
    });

    $(".ymfoot>li>a").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            console.log($this[0].href);
            console.log(String(window.location));
            $(this).parent().siblings().find('.ymfoot-off').css('display','none');
            $(this).parent().siblings().find('.ymfoot-on').css('display','block');
            $(this).find('.ymfoot-on').css('display','none');
            $(this).find('.ymfoot-off').css('display','block');
        }
    });
}