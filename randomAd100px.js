(function() {
    var css = `
        #xsdp-promote-voh1 .random-ad1 img {
            display: none;
            max-height: 100px;
            width: auto;  
        }

        #xsdp-promote-voh1 {
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
        <div class="random-ad1"><a href="https://voh.com.vn/tin-sao/vinh-rau-faptv-thua-nhan-cang-thang-khi-lam-viec-voi-huynh-phuong-btv64-486661.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vinh Râu" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/g6cLO5e.png"> </a></div>
<div class="random-ad1"><a href="https://voh.com.vn/tin-sao/thuy-kieu-faptv-7-nam-dong-hanh-cung-faptv-biet-ro-con-nguoi-that-huynh-phuong-btv134-486793.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Thúy Kiều" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/RF0fsdS.png"> </a></div>
<div class="random-ad1"><a href="https://voh.com.vn/show/hau-truong-tet-o-lang-dia-nguc-quang-tuan-chay-mau-cam-vi-lanh-nguyen-thao-khong-dam-noi-chuyen-voi-vo-tan-phat-btv64-501432.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Dàn sao Tết Ở Làng Địa Ngục" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/8QTZKN6.png"> </a></div>
<div class="random-ad1"><a href="https://voh.com.vn/show/giai-ma-moi-duyen-2-ty-giua-neko-le-va-ngoc-thanh-tam-btv134-501274.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Ngọc Thanh Tâm & Neko Lê" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/kvh8IgC.png"> </a></div>
<div class="random-ad1"><a href="https://voh.com.vn/benh/co-phai-tat-ca-muoi-van-deu-truyen-benh-sot-xuat-huyet-501572.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - Muỗi vằn" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/n3C5acY.jpeg"> </a></div>
<div class="random-ad1"><a href="https://voh.com.vn/benh/sot-xuat-huyet-va-sot-ret-khac-nhau-nhu-the-nao-501580.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - Phân biệt" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/geDBjjs.jpeg"> </a></div>
<div class="random-ad1"><a href="https://voh.com.vn/benh/vi-sao-can-lam-xet-nghiem-theo-doi-tieu-cau-trong-dieu-tri-sot-xuat-huyet-501607.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - xét nghiệm tiểu cầu" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/Pys9vpN.jpeg"> </a></div>
<div class="random-ad1"><a href="https://voh.com.vn/benh/bi-sot-xuat-huyet-co-duoc-uong-ibuprofen-501620.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - uống thuốc" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/zOmPBBH.jpeg"> </a></div>
<div class="random-ad1"><a href="https://gamengon.net/?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Game Ngon .net" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/E2p3Ri8.png"> </a></div>
<div class="random-ad1"><a href="https://gamengon.net/?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Game Ngon .net" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/E2p3Ri8.png"> </a></div>
<div class="random-ad1"><a href="https://gamengon.net/?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Game Ngon .net" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/E2p3Ri8.png"> </a></div>
`;
    var targetDiv1 = document.getElementById('xsdp-promote-voh1');
    if (targetDiv1) {
        targetDiv1.innerHTML = html;
    }
    window.onload = function() {
        var ads1 = targetDiv1.querySelectorAll('.random-ad1');
        var randomAdIndex1 = Math.floor(Math.random() * ads.length);
        var selectedAd1 = ads[randomAdIndex1];
        var imageInSelectedAd1 = selectedAd1.querySelector('img');
        imageInSelectedAd1.style.display = 'block';
    };
})();
