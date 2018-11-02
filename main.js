var $buttons = $('li')
$buttons.on('click', function (x) {                 //按钮点击事件
    var index = $(x.currentTarget).index()      //获取元素在兄弟元素中的排行
    console.log(index)
    var p = index * -918
    var q = index * 60
    $buttons.eq(index).addClass('active').removeClass('wait').siblings().removeClass('active').addClass('wait')
    $('.images').css({                         //移动图片
        transform: 'translateX(' + p + 'px)'
    })
    $('.main .inner .after').css({
        transform: 'translateX(' + q + 'px)'
    })
    $('.main .inner .before').css({
        transform: 'translateX(' + q + 'px)'
    })
})
