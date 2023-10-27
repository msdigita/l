(function() {
    // CSS
    var css = `
        .random-ad img {
            display: none;
        }

        #xsdp-promote-voh {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

    `;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // HTML
    var html = `
        <div class="random-ad"><a href="https://voh.com.vn/benh/cach-phan-biet-benh-thuy-dau-va-dau-mua-khi-500029.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner" title="Đậu mùa khỉ" rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/af/3c/9d/af3c9d528ad73b7d78b2b3a5415b1f57.jpg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/nguon-goc-va-con-duong-lay-truyen-cua-benh-dau-mua-khi-500021.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner" title="Đậu mùa khỉ" rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/cb/cd/e7/cbcde7ad32059846e1c3c31757af275b.jpg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/khoe/dau-hieu-dac-trung-cua-benh-dau-mua-khi-va-cach-phong-ngua-500127.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner" title="Đậu mùa khỉ" rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/67/85/f7/6785f7959df4299395305049456306bc.jpg"> </a></div>
    `;

    // Chèn HTML vào thẻ <div id="xsdp-promote-voh">
    var targetDiv = document.getElementById('xsdp-promote-voh');
    if (targetDiv) {
        targetDiv.innerHTML = html;
    }

    // JavaScript logic
    window.onload = function() {
        // Lấy tất cả phần tử có class là "random-ad" từ bên trong targetDiv
        var ads = targetDiv.querySelectorAll('.random-ad');

        // Chọn ngẫu nhiên một quảng cáo
        var randomAdIndex = Math.floor(Math.random() * ads.length);
        var selectedAd = ads[randomAdIndex];

        // Hiển thị hình ảnh trong quảng cáo đã chọn
        var imageInSelectedAd = selectedAd.querySelector('img');
        imageInSelectedAd.style.display = 'block';
    };
})();
