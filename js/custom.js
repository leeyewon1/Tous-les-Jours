$(function () {
    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    // $('.tab_menu li').on('click', function (e) {
    //     e.preventDefault();
    //     const idx = $(this).index();
    //     console.log('내가 클릭한 것의 번호:', idx);
    //     $('.tab_content .inner')
    //         .eq(idx)
    //         .addClass('on')
    //         .siblings()
    //         .removeClass('on');
    //     $(this)
    //         .addClass('on')
    //         .siblings()
    //         .removeClass('on');
    // });

    $('.tab_menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_menu li').removeClass('on');
        $('.tab_menu li').eq(idx).addClass('on');

        $('.tab_content .inner .content_itm').removeClass('on')
        $('.tab_content .inner .content_itm').eq(idx).addClass('on')
    });

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
        $('#header').toggleClass('ac');
    });

    $('#gnb').on('wheel', function (e) {
        e.preventDefault();
    })

    // $(window).on('resize', function () {
    //     $('.gnb').removeClass('on')
    // })

})