$(function(){
$(window).resize(function(){
    var w = $(window).width();
    var x = 687;
    if (w <= x) {
        $('#hug').addClass('show');
        $('#char').html("<h1>おめでとう！!</h1><br><hr><h2>君のおかげで、2人の物語が動き出した！<br><br>さあ、君のストーリーを、最後まで見届けよう！<br><br><a href='https://www.youtube.com/watch?v=0pdqf4P9MB8' >予告編　<strong>▶</strong></a><br><br><a href='https://www.amazon.co.jp/-/en/%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%BB%E3%82%B4%E3%82%BA%E3%83%AA%E3%83%B3%E3%82%B0/dp/B0714LYZ3G'>本　編　<strong>▶</strong></a></h2><br><br><a id='pagetop' href='file://eltexhq-fs1/%E6%96%B0%E4%BA%BA%E7%A0%94%E4%BF%AE/%E6%96%B0%E4%BA%BA%E7%A0%94%E4%BF%AE2020/HTML%E3%83%BBCSS%E3%83%BBJS/haruki/HTML/haruki.html'>TOP</a>");
    } else {
        $('#hug').removeClass('show');
        $('#char').html("<h1><strong>愛</strong>を取り戻せ</h1><br><hr><h2>LA LA LANDの未来は君に託された！<br><br>心の距離が離れている2人の<strong>本当の気持ち</strong>に気付かせてあげよう！<br><br></h2>");
    }
});
});