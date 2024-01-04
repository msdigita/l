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
            <div class="random-ad"><a href="https://voh.com.vn/benh/vi-sao-nguoi-gay-khong-uong-ruou-bia-van-bi-gan-nhiem-mo-510601.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Gan nhiễm mỡ - Đối tượng" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/Pqyha1F.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/khi-nao-can-cho-tre-kham-sang-loc-gan-nhiem-mo-510634.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Gan nhiễm mỡ - Trẻ em" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/OqxH1cx.jpeg"> </a></div>
<div class="random-ad"><a href="http://voh.com.vn/benh/co-nen-an-chay-khi-bi-gan-nhiem-mo-510743.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Gan nhiễm mỡ - Ăn chay" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/dSA73uV.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/gan-nhiem-mo-co-nguy-hiem-khong-cach-dieu-tri-phong-tranh-510610.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Gan nhiễm mỡ - Điều trị, phòng ngừa" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/YsqH8Ik.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/nguoi-bi-gan-nhiem-mo-nen-an-gi-kieng-an-gi-510622.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Gan nhiễm mỡ - Dinh dưỡng" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/wWnvCNk.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/che-do-tap-luyen-de-phong-tranh-va-cai-thien-gan-nhiem-mo-510720.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Gan nhiễm mỡ - Luyện tập" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/0glsKil.jpeg"> </a></div>
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
