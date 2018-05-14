var mySwiper = new Swiper('.content-swiper', {
    //竖向轮播
    direction: 'vertical',
    //不循环轮播
    loop: false,
    //渐隐渐现
    slide: 'fade',
    mousewheel: true,
    followFinger: false,
    speed: 800,
    // 如果需要分页器
    pagination: {
        el: '.pagination',
        //自定义分页器
        type: 'custom',
        //点击分页器效果
        clickable: true
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next'
    },
    on: {
        init: function (swiper) {
            console.log(this.slides.eq(0));
            slide = this.slides.eq(0);
            slide.addClass('ani-slide');
        },
        transitionStart: function () {
            for (i = 0; i < this.slides.length; i++) {
                slide = this.slides.eq(i);
                slide.removeClass('ani-slide');
            }
        },
        transitionEnd: function () {
            slide = this.slides.eq(this.activeIndex);
            slide.addClass('ani-slide');
        },
    }
})   
var myPriceSwiper = new Swiper('.price-table-content', {
    //竖向轮播
    direction: 'vertical',
    //不循环轮播
    loop: false,
    //渐隐渐现
    slide: 'fade',
    // 如果需要分页器
    pagination: {
        el: '.price-pagination',
        //自定义分页器
        type: 'custom',
        //点击分页器效果
        clickable: true
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.price-scrollbar',
    },
})      