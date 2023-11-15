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
            <div class="random-ad"><a href="https://voh.com.vn/tin-sao/lena-nhac-cua-minh-deu-tu-chuyen-ca-nhan-ma-ra-btv134-498039.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Lena" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/8lGxmcX.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/tin-sao/giai-ma-tiktoker-choco-va-cau-chuyen-dang-sau-body-shaming-btv134-498304.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Choco" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/6iEGRL9.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/olew-tiet-lo-ly-do-vi-sao-den-gio-van-khong-co-quan-ly-cu-mot-minh-tu-boi-btv053-500969.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="O.LEW" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/ersAwsn.png"> </a></div>
<div class="random-ad"><a href="http://voh.com.vn/show/nguoi-vo-cuoi-cung-nhung-cau-chuyen-thu-vi-trong-qua-trinh-lam-phim-lan-dau-duoc-tiet-lo-502269.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Dàn sao Người Vợ Cuối Cùng" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/JzYqDSi.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/show/ca-si-han-quoc-jin-ju-no-luc-di-len-bang-thuc-luc-hanh-phuc-khi-hoat-dong-o-viet-nam-btv64-502256.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Ca sĩ Jin Ju" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/sWEo31V.png"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/co-phai-tat-ca-muoi-van-deu-truyen-benh-sot-xuat-huyet-501572.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - Muỗi vằn" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/n3C5acY.jpeg"> </a></div>
            <div class="random-ad"><a href="https://voh.com.vn/benh/tre-mac-tay-chan-mieng-phai-cach-ly-bao-lau-502556.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - thời gian cách ly" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/8L4JU42.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/tre-mac-tay-chan-mieng-noi-mun-nuoc-nhieu-co-sao-khong-502535.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - mụn nước" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/krMl0I6.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/phu-nu-mang-thai-khong-the-lo-la-voi-benh-tay-chan-mieng-502582.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - bà bầu" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/O3nSxOT.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/bi-tay-chan-mieng-kieng-gi-3-sai-lam-thuong-gap-khien-benh-lau-khoi-502616.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - kiêng gì" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/5BHAlTu.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/tre-bi-tay-chan-mieng-co-nen-tam-la-theo-meo-dan-gian-502888.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - tắm lá" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/nZrbJaZ.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/cach-ve-sinh-sat-khuan-nha-cua-do-dung-phong-chong-benh-tay-chan-mieng-502921.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - vệ sinh, sát khuẩn" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/sFa0gfe.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/bien-chung-nguy-hiem-cua-benh-tay-chan-mieng-502520.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Tay chân miệng - biến chứng nguy hiểm" rel="sponsored" target="_blank"> <img src="https://imgur.com/1itmiR6"> </a></div>
<div class="random-ad"><a href="https://gamengon.net/?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Game Ngon .net" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/E2p3Ri8.png"> </a></div>

        
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
