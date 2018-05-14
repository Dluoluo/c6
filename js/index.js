var mySwiper = new Swiper('.content-swiper', {
    //竖向轮播
    direction: 'vertical',
    //不循环轮播
    loop: false,
    //渐隐渐现
    slide: 'fade',
    // 如果需要分页器
    pagination: {
        el: '.pagination',
        //自定义分页器
        type: 'custom',
        //点击分页器效果
        clickable:true
    }
})        