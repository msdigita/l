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
            <div class="random-ad"><a href="https://voh.com.vn/benh/test-vi-khuan-hp-bang-nuoc-bot-phan-khoa-hoc-mat-ve-sinh-506115.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vi khuẩn HP - Test nước bọt" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/fjJHbuT.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/dung-cay-rau-muong-chua-vi-khuan-hp-co-duoc-khong-506101.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vi khuẩn HP - Dùng rau mương diệt HP" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/qLlIPlD.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/co-phai-nguoi-bi-nhiem-khuan-hp-deu-se-bi-ung-thu-da-day-506021.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vi khuẩn HP - Nhiễm HP bị ung thư" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/f56d4kn.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/dung-chung-dua-muong-voi-nguoi-benh-da-day-co-lay-khong-505988.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vi khuẩn HP - Ăn uống bị lây " rel="sponsored" target="_blank"> <img src="https://i.imgur.com/HkYBEC8.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/am-tinh-gia-voi-vi-khuan-hp-nguy-hiem-nhu-the-nao-506109.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Vi khuẩn HP - Âm tính giả" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/Ip8oJXR.jpeg"> </a></div>
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
