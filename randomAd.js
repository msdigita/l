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
            <div class="random-ad"><a href="https://voh.com.vn/benh/nhom-doi-tuong-nao-de-bi-vi-khuan-hp-tan-cong-506006.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vi khuẩn HP - Đối tượng dễ nhiễm HP" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/6RVgjNS.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/quan-diem-nhiem-hp-khong-can-dieu-tri-dung-hay-sai-505987.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vi khuẩn HP - Quan điểm điều trị HP" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/53TqRtl.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/cach-phong-tranh-tai-nhiem-vi-khuan-hp-sau-khi-dung-thuoc-506010.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vi khuẩn HP - Phòng tránh tái nhiễm HP" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/9hucgbu.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/tiem-phong-uon-van-co-tac-dung-trong-bao-lau-507083.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Uốn ván - Lịch tiêm phòng nhắc lại" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/YfJFK67.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/nen-tiem-phong-uon-van-bao-lau-sau-khi-bi-thuong-507100.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Uốn ván - Tiêm phòng sau khi bị thương" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/cwp1Y2O.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/tiem-phong-uon-van-co-gay-sinh-non-khong-507131.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Uốn ván - Tiêm phòng cho bà bầu" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/cMWNsAQ.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/tu-vong-do-nhiem-khuan-uon-van-506661.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Uốn ván - Bệnh gì" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/LflvOXb.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/doi-tuong-nao-de-mac-benh-uon-van-507066.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Uốn ván - Đối tượng dễ mắc bệnh" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/MBMDORZ.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/benh-uon-van-nguy-hiem-nhu-the-nao-507118.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Uốn ván - Nguy hiểm chết người" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/Gxl9rLz.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/benh-uon-van-co-chua-duoc-khong-507152.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Uốn ván - Chữa được không" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/QR7AYaC.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/cach-xu-ly-vet-thuong-de-phong-benh-uon-van-507169.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Uốn ván - Xử lý vết thương" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/RQFhsC7.jpeg"> </a></div>
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
