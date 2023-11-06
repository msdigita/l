(function() {
    var css = `
        .random-ad img {
            display: none;
            max-height: 120px;
            width: auto;  
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

    var html = `
        <div class="random-ad"><a href="https://voh.com.vn/tin-sao/obito-cu-viet-va-khoc-cho-den-khi-album-danh-doi-hoan-thanh-btv134-500321.html?utm_source=xsdp&utm_medium=notify&utm_campaign=mobile_banner" title="Obito" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/SH0dJLQ.png"> </a></div>
        <div class="random-ad"><a href="https://voh.com.vn/show/ly-tuan-kiet-tu-hao-la-mot-phan-cua-hkt-len-tieng-ve-moi-quan-he-giua-titi-va-ho-gia-hung-btv64-496495.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Lý Tuấn Kiệt" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/yrsbB5w.png"> </a></div>
        <div class="random-ad"><a href="https://voh.com.vn/show/phuong-my-chi-trong-gioi-nghe-si-tien-bac-khong-phai-la-thu-quan-trong-nhat-btv134-498925.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Phương Mỹ Chi" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/rJsB0KK.png"> </a></div>
`;
    var targetDiv = document.getElementById('xsdp-promote-voh');
    if (targetDiv) {
        targetDiv.innerHTML = html;
    }
    window.onload = function() {
        var ads = targetDiv.querySelectorAll('.random-ad');
        var randomAdIndex = Math.floor(Math.random() * ads.length);
        var selectedAd = ads[randomAdIndex];
        var imageInSelectedAd = selectedAd.querySelector('img');
        imageInSelectedAd.style.display = 'block';
    };
})();
