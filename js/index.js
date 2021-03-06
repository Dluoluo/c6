// content轮播
var mySwiper = new Swiper('.content-swiper', {
    //竖向轮播
    direction: 'vertical',
    //不循环轮播
    loop: false,
    //渐隐渐现
    slide: 'fade',
    // mousewheel: true,
    followFinger: false,
    speed: 800,
    // 如果需要分页器
    pagination: {
        el: '.pagination',
        //点击分页器效果
        clickable: true,
        renderBullet: function (index, className) {
            var el = '<span class="' + className + '" style="background: url(./img/pagination-' + (index + 1) + '.png) no-repeat;background-size: 200% 100%;"></span>';
            return el;
        }
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.button-next'
    },
    on: {
        init: function (swiper) {
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
        //向下滑动到底透明
        slideChange: function () {
            var ospan = document.querySelector('.button-next-span');
            if (this.isEnd) {
                this.navigation.$nextEl.css('opacity', '0');
                ospan.style.opacity = '0';
            } else {
                this.navigation.$nextEl.css('opacity', '1');
                ospan.style.opacity = '1';
            }
        },
    }
})
// 配置轮播
var myPriceSwiper = new Swiper('.price-table-content', {
    direction: 'vertical',
    //不循环轮播
    loop: false,
    //滚动条滚动
    mousewheel: true,
    // 如果需要分页器
    speed: 400,
    slidesPerView: 'auto',
    pagination: {
        el: '.price-pagination',
        //点击分页器效果
        clickable: true,
        renderBullet: function (index, className) {
            switch (index) {
                case 0: text = '技术参数'; break;
                case 1: text = '舒适'; break;
                case 2: text = '外观'; break;
                case 3: text = '内饰'; break;
                case 4: text = '安全科技'; break;
                case 4: text = '音响/娱乐'; break;
            }
            return '<span class="' + className + '">' + text + '</span>'
        }
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.price-scrollbar',
        //是否允许拖动滚动条
        draggable: true,

    },
})
myPriceSwiper.scrollbar.$dragEl.css('background', '#1f4558');
//百年传承轮播
var myHistorySwiper = new Swiper('.history-swiper', {
    // 横向
    direction: 'horizontal',
    simulateTouch: false,
    //速度800
    speed: 800,

    navigation: {
        nextEl: '.history-button-prev',
        prevEl: '.history-button-next',
    },

    on: {
        init: function (swiper) {
            slide = this.slides.eq(0);
            slide.addClass('ani-slide-history');
        },
        transitionStart: function () {
            for (i = 0; i < this.slides.length; i++) {
                slide = this.slides.eq(i);
                slide.removeClass('ani-slide-history');
            }
        },
        transitionEnd: function () {
            slide = this.slides.eq(this.activeIndex);
            slide.addClass('ani-slide-history');
        },
        slideChange: function () {
            if (this.isEnd) {
                this.navigation.$nextEl.css('opacity', '0');
            } else {
                this.navigation.$nextEl.css('opacity', '1');
            }
            if (this.activeIndex) {
                this.navigation.$prevEl.css('opacity', '1');
            } else {
                this.navigation.$prevEl.css('opacity', '0');
            }
        },
    }
})

function textBlock() {
    var aIcon = document.querySelectorAll('.concept-icon'),
        aText = document.querySelectorAll('.concept-detailed-text');
    for (var i = 0; i < aIcon.length; i++) {
        aIcon[i].index = i;
        aIcon[i].addEventListener('mouseover', function () {
            var i = this.index
            aText[i].style.opacity = '1'
        })
        aIcon[i].addEventListener('mouseout', function () {
            var i = this.index
            aText[i].style.opacity = '0'
        })
    }
}
textBlock()

function ulBlock() {

    var oProvince = document.querySelector('.signup-province'),
        oCity = document.querySelector('.signup-city'),
        oPList = document.querySelector('.signup-province-list'),
        aPLists = oPList.querySelectorAll('input')
        oCList = document.querySelector('.signup-city-list'),
        aCLists = oCList.querySelectorAll('input');

    oProvince.addEventListener('click', function (e) {
        e = e || window.event;
        if (window.event) {    //阻止事件冒泡
            e.cancelBubble = true;

        } else {
            e.stopPropagation();
        }
        oPList.style.display="block";
        console.log(oPList.style.display)
    }, false)
    oCity.addEventListener('click', function (e) {
        e = e || window.event;
        if (window.event) {    //阻止事件冒泡
            e.cancelBubble = true;

        } else {
            e.stopPropagation();
        }
        oCList.style.display = "block";
    }, false)
    document.documentElement.addEventListener('click', hideFn, false);
    function hideFn(e) {
        oPList.style.display = "none";
        oCList.style.display = "none";
    }
    for (var i = 0; i < aPLists.length; i++) {
        aPLists[i].addEventListener('click', function () {
            oProvince.value = this.value;
            console.log(this)
        }, false)
    }
    for (var i = 0; i < aCLists.length; i++) {
        aCLists[i].addEventListener('click', function () {
            oCity.value = this.value;
            console.log(this)
        }, false)
    }
}
ulBlock()