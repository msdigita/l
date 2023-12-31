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
            <div class="random-ad"><a href="https://voh.com.vn/benh/cach-nhan-biet-nhiem-khuan-mycoplasma-508305.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Hội chứng phổi trắng - Cách nhận biết" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/tZYTvRU.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/con-duong-lay-truyen-va-bien-chung-khi-nhiem-mycoplasma-508376.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Hội chứng phổi trắng - Đường lây nhiễm" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/Ktqcmz0.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/corticoid-con-dao-hai-luoi-voi-benh-phoi-trang-508381.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Hội chứng phổi trắng - Thuốc Corticoid" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/9n7ThRA.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/cach-dung-thuoc-va-phong-benh-phoi-trang-do-mycoplasma-508403.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Hội chứng phổi trắng - Phòng bệnh" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/5tWnQi4.jpeg"> </a></div>
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
