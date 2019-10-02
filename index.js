$(document).ready(function() {

    window.location.hash = '#startingPoint';

    $("#menu_plugin").gabrielmenubar({
        fontColor: "#91867C",
        textWidth: "200px",
        fontOnHover: "helvetica",
        fontColorOnHover: "#FFFFFF",
        background: "#222222",
        backgroundOnHover: "#91867C",
        distanceToTop: "0px",
        menuWidth: "18px",
        currentSelectedElementFont: "sans-serif",
        currentSelectedElementBackground: "#f1f1f1",
        spaceBetweenElements: "10px",
        elementCellWidth: "20px",
    });


    $("#slider").bxSlider({
        auto: false,
        autoControls: false,
        captions: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 800,
        infiniteLoop: false,
        touchEnabled: true,
        slideMargin:  0,
        controls: true,
        nextText: 'Next',
        prevText: 'Prev',
        pager: true,
        mode: 'fade'
    });

    $("#skills").bxSlider({
        auto: true,
        speed: 4000,
        pause: 0,
        autoControls: true,
        captions: true,
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 800,
        slideHeight: 0,
        infiniteLoop: true,
        touchEnabled: true,
        slideMargin:  0,
        controls: false,
        pager: false
    });

    $('.size')
            .width('356px')
            .height('256px');

    $('.database')
            .width('64px')
            .height('64px');

    $('.main_image')
            .width('1195px')
            .height('445px');

    $( '.type-text' ).each( function() {
      var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
      $( this ).empty().attr( 'title', '' ).teletype( {
        text: $.map( items.split( ';' ), $.trim ),
        typeDelay: 10,
        backDelay: 20,
        cursor: '▋',
        delay: 10000,
        preserve: false,
        prefix: '[gabi_ferreira ~]# ',
        loop: 0
      } );
    } );

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var currentPosition = $(this).offset().top;

            var topOfScreen = $(window).scrollTop();
            if (currentPosition < topOfScreen + 760) {
                $(this).addClass("slide");
            }
        });
    });

    $("#iPicture").iPicture({
        animation: true,
        animationBg: "bgblack",
        animationType: "ltr-slide",
        pictures: ["picture1"],
        button: "moreblack",
        moreInfos: {
            "picture1": [{
                "id": "tooltip1",
                "descr": "Tab Navigation",
                "top": "20px",
                "left": "70px"
            }, {
                "id": "tooltip2",
                "descr": "Toolbar - Inner menus",
                "top": "80px",
                "left": "50px"
            }, {
                "id": "tooltip3",
                "descr": "Qualify by speciallity",
                "top": "430px",
                "left": "200px"
            }, {
                "id": "tooltip4",
                "descr": "Fields 100% validated",
                "top": "240px",
                "left": "1140px"
            }, {
                "id": "tooltip5",
                "descr": "Buttons guided by icons",
                "top": "580px",
                "left": "350px"
            }]
        }
    });
});
