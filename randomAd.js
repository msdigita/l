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
            <div class="random-ad"><a href="https://voh.com.vn/benh/vi-sao-goi-benh-cum-la-cum-mua-ac-tinh-503634.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Cúm mùa - cúm mùa ác tính" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/TnmJUBg.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/nguyen-nhan-nao-khien-benh-cum-mua-gia-tang-503624.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Cúm mùa -  nguyên nhân bệnh gia tăng" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/gqUjUtn.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/nguoi-vo-cuoi-cung-nhung-cau-chuyen-thu-vi-trong-qua-trinh-lam-phim-lan-dau-duoc-tiet-lo-502269.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Dàn sao Người Vợ Cuối Cùng" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/5ov2j43.png"> </a></div>
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
