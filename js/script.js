/*スムーズトップスクロール*/ 

/*
TopScroll = document.getElementById('pagetop');
TopScroll.addEventListener('click', (e) => { //ボタンがクリックされた時
    e.preventDefault();  //ページ再読み込みのイベントをキャンセル
    window.scroll({ //画面をスクロールさせる
    top: 0,
    behavior: 'smooth'
    });
});
*/

$(function(){
    $('#pagetop').on('click', function(){
        $('html, body').animate({scrollTop:0}, 1000, 'swing');
        return false;
    });

    /*アコーディオンメニュー */
    $('.menu_trigger').on('click', function(){
    if ($(this).next().not(':animated').length >= 1) {
        $(this).toggleClass('open');
        $('.menu').slideToggle(1000);
        if ($(this).hasClass('open')) {
            $('.menu_trigger span').text('メニューを閉じる');    
        } else {
            $('.menu_trigger span').text('メニューを開く');
        }
    }
    });
});