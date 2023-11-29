(function() {
    var html = `
            <style>
                .random-ad img {
                    display: none;
                    max-height: 100px;
                    width: auto;
                }

                #xsdp-promote-voh {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    margin-top: 5px;
                }
            </style>
            <div class="random-ad"><a href="https://voh.com.vn/show/ca-si-han-quoc-jin-ju-no-luc-di-len-bang-thuc-luc-hanh-phuc-khi-hoat-dong-o-viet-nam-btv64-502256.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Ca sĩ Jin Ju" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/9kRYXY5.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/olew-tiet-lo-ly-do-vi-sao-den-gio-van-khong-co-quan-ly-cu-mot-minh-tu-boi-btv053-500969.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="O.LEW" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/IaL6Sb1.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/tre-bi-bien-chung-lo-loet-vi-cha-me-tu-dieu-tri-tay-chan-mieng-503045.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - lở loét nặng" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/Y3UjQoy.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/bien-chung-nguy-hiem-cua-benh-tay-chan-mieng-502520.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - biến chứng nguy hiểm" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/1itmiR6.jpeg"> </a></div>
`;

    var targetDiv = document.getElementById('xsdp-promote-voh');

    if (targetDiv) {
        targetDiv.innerHTML = html;

        window.onload = function() {
            let ads = targetDiv.querySelectorAll('.random-ad');
            let randomAdIndex = Math.floor(Math.random() * ads.length);
            let selectedAd = ads[randomAdIndex];
            let imageInSelectedAd = selectedAd.querySelector('img');
            imageInSelectedAd.style.display = 'block';
        };
    }
})();
