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
            <div class="random-ad"><a href="https://voh.com.vn/benh/dieu-can-biet-ve-benh-phoi-trang-dang-bung-phat-nhieu-nuoc-508290.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Hội chứng phổi trắng - Điều cần biết" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/aCNlRK6.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/chua-benh-phoi-trang-bang-cay-thuoc-doi-co-nguy-hiem-508278.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Hội chứng phổi trắng - Chữa bệnh" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/6DPg84a.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/mycoplasma-nguyen-nhan-hang-dau-gay-benh-phoi-trang-o-nhieu-noi-508307.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Hội chứng phổi trắng - Nguyên nhân" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/jsgCZxi.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/cach-nhan-biet-nhiem-khuan-mycoplasma-508305.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Hội chứng phổi trắng - Cách nhận biết" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/tZYTvRU.jpeg"> </a></div>`;

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
