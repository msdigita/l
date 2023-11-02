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
            margin-top: 20px;
        }

    `;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // HTML
    var html = `<div class="random-ad"><a href="https://voh.com.vn/benh/tai-sao-khi-dau-mat-do-nen-deo-kinh-ram-va-khau-trang-500592.html" title="Đau mắt đỏ - phòng ngừa" rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/34/2e/6e/342e6e3ed60eabbb3e00ecb7b4c1f43f.jpg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/dau-mat-do-co-bi-lai-khong-bao-lau-thi-khoi-500614.html" title="Đau mắt đỏ - có bị lại không" rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/e3/a6/08/e3a6083aa1e0b2ab05b006d2a4007acb.jpg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/me-bau-phu-nu-dang-cho-con-bu-bi-dau-mat-do-nen-lam-gi-500615.html" title="Đau mắt đỏ - bà bầu, phụ nữ mang thai" rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/21/c3/ea/21c3ea0c51839be1daa8a0112f813627.jpg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/dau-mat-do-khi-nao-can-di-kham-btv143-500607.html" title="Đau mắt đỏ - Khi nào đi khám?" rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/2a/e5/da/2ae5da2d11b614662a575da84288571d.jpg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/sai-lam-trong-dieu-tri-dau-mat-do-va-cach-dieu-tri-tai-nha-btv143-500631.html" title="Đau mắt đỏ - Sai lầm điều trị " rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/1c/5d/fd/1c5dfdd7a9cc891f1187a3539fc63d62.jpg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/can-trong-khi-rua-mat-voi-nuoc-muoi-sinh-ly-btv143-500573.html" title="Đau mắt đỏ - Cách rửa mắt " rel="sponsored" target="_blank"> <img src="https://i.pinimg.com/originals/ac/29/f6/ac29f6f573f1f9b95675b3c7ee4e1908.jpg"> </a></div>
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
