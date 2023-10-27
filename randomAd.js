(function() {
    // CSS
    var css = `
        .random-ad img {
            display: none;
        }
    `;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // HTML
    var html = `
        <div class="random-ad">
            <a href="https://voh.com.vn/show/tang-duy-tan-am-nhac-mot-mau-hay-khong-tuy-vao-nhin-nhan-cua-khan-gia-btv134-499423.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile" title="Tăng Duy Tân" rel="sponsored" target="_blank"> 
                <img src=""> 
            </a>
        </div>

        <div class="random-ad">
            <a href="https://voh.com.vn/show/trinh-dinh-quang-tung-khong-dam-nghe-lai-nhac-cua-minh-vi-ap-luc-btv64-492046.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile" title="Trịnh Đình Quang" rel="sponsored" target="_blank"> 
                <img src="https://i.pinimg.com/originals/ed/0f/69/ed0f69b967bec18236349e45eaf56237.jpg"> 
            </a>
        </div>

        <div class="random-ad">
            <a href="https://voh.com.vn/show/cao-thai-son-tu-hao-la-ca-si-8x-duy-nhat-canh-tranh-duoc-top-trending-voi-cac-genz-btv134-494696.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner" title="Cao Thái Sơn" rel="sponsored" target="_blank"> 
                <img src="https://i.pinimg.com/originals/a3/f6/b9/a3f6b949717e4a92ca2a2be54e2a3d6a.jpg"> 
            </a>
        </div>
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
