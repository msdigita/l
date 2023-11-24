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
            <div class="random-ad"><a href="https://voh.com.vn/show/nguoi-vo-cuoi-cung-nhung-cau-chuyen-thu-vi-trong-qua-trinh-lam-phim-lan-dau-duoc-tiet-lo-502269.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Dàn sao Người Vợ Cuối Cùng" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/5ov2j43.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/fabo-nguyen-dinh-chinh-tuoi-that-quyet-chup-thuoc-me-vo-vi-btv134-503105.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Fabo Nguyễn" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/yz9YVng.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/tre-bi-tay-chan-mieng-roi-co-mac-lai-khong-502903.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - có bị lại không" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/6fOrd2r.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/nguoi-lon-mac-tay-chan-mieng-dung-chu-quan-502972.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - người lớn" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/zwAjQ4o.jpeg"> </a></div>
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
