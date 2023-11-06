(function() {
    var css = `
        .random-ad img {
            display: none;
            max-height: 120px;
            width: auto;  
        }

        #xsdp-promote-voh {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin-top: 20px;
        }

    `;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var html = `
        <div class="random-ad"><a href="https://voh.com.vn/tin-sao/vinh-rau-faptv-thua-nhan-cang-thang-khi-lam-viec-voi-huynh-phuong-btv64-486661.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vinh Râu" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/g6cLO5e.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/tin-sao/thuy-kieu-faptv-7-nam-dong-hanh-cung-faptv-biet-ro-con-nguoi-that-huynh-phuong-btv134-486793.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Thúy Kiều" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/RF0fsdS.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/hau-truong-tet-o-lang-dia-nguc-quang-tuan-chay-mau-cam-vi-lanh-nguyen-thao-khong-dam-noi-chuyen-voi-vo-tan-phat-btv64-501432.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Dàn sao Tết Ở Làng Địa Ngục" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/8QTZKN6.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/giai-ma-moi-duyen-2-ty-giua-neko-le-va-ngoc-thanh-tam-btv134-501274.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Ngọc Thanh Tâm & Neko Lê" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/kvh8IgC.png"> </a></div>
`;
    var targetDiv = document.getElementById('xsdp-promote-voh');
    if (targetDiv) {
        targetDiv.innerHTML = html;
    }
    window.onload = function() {
        var ads = targetDiv.querySelectorAll('.random-ad');
        var randomAdIndex = Math.floor(Math.random() * ads.length);
        var selectedAd = ads[randomAdIndex];
        var imageInSelectedAd = selectedAd.querySelector('img');
        imageInSelectedAd.style.display = 'block';
    };
})();
