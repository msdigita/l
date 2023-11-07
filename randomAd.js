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
        <div class="random-ad"><a href="https://voh.com.vn/benh/co-phai-tat-ca-muoi-van-deu-truyen-benh-sot-xuat-huyet-501572.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - Muỗi vằn" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/n3C5acY.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/sot-xuat-huyet-va-sot-ret-khac-nhau-nhu-the-nao-501580.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - Phân biệt" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/geDBjjs.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/vi-sao-can-lam-xet-nghiem-theo-doi-tieu-cau-trong-dieu-tri-sot-xuat-huyet-501607.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - xét nghiệm tiểu cầu" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/Pys9vpN.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/bi-sot-xuat-huyet-co-duoc-uong-ibuprofen-501620.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - uống thuốc" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/zOmPBBH.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/nhan-biet-tinh-trang-xuat-huyet-giam-tieu-cau-o-nguoi-bi-sot-xuat-huyet-501642.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - nhận biết" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/cTOVvkE.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/doi-tuong-nao-de-bi-sot-xuat-huyet-va-co-the-tai-nhiem-bao-nhieu-lan-501622.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - đối tượng" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/sNIe6ym.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/het-sot-la-het-benh-sai-lam-chet-nguoi-cua-benh-sot-xuat-huyet-501678.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - hết sốt là hết bệnh" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/rXr0VWa.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/nguy-hiem-tiem-tang-tu-y-truyen-dich-khi-mac-sot-xuat-huyet-501815.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - truyền dịch" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/G8QKVrk.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/soc-trong-sot-xuat-huyet-nguy-hiem-the-nao-lam-sao-nhan-biet-501921.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - sốc sốt huyết" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/mc2bJpH.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/dieu-tri-sot-xuat-huyet-tai-nha-va-nhung-sai-lam-thuong-gap-501890.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - điều trị" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/eRMsA23.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/benh/sot-xuat-huyet-khi-mang-thai-co-nguy-hiem-va-gay-di-tat-thai-nhi-501937.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Sốt xuất huyết - bà bầu" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/yoaxbn5.jpeg"> </a></div>
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
