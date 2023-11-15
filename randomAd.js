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
            <div class="random-ad"><a href="https://voh.com.vn/tin-sao/vinh-rau-faptv-thua-nhan-cang-thang-khi-lam-viec-voi-huynh-phuong-btv64-486661.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vinh Râu" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/a6tlvGp.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/tin-sao/thuy-kieu-faptv-7-nam-dong-hanh-cung-faptv-biet-ro-con-nguoi-that-huynh-phuong-btv134-486793.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Thúy Kiều" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/fNKueEm.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/hau-truong-tet-o-lang-dia-nguc-quang-tuan-chay-mau-cam-vi-lanh-nguyen-thao-khong-dam-noi-chuyen-voi-vo-tan-phat-btv64-501432.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Dàn sao Tết Ở Làng Địa Ngục" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/8QTZKN6.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/giai-ma-moi-duyen-2-ty-giua-neko-le-va-ngoc-thanh-tam-btv134-501274.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Ngọc Thanh Tâm & Neko Lê" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/T6X8zgQ.png"> </a></div>  
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
