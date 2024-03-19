/*
CÁCH ĐẶT CODE:
<div id="xsdp-promote-voh" style="height:100px;"></div>
<script src="https://msdigita.github.io/l/randomAd.js"></script>
*/

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
            <div class="random-ad"><a href="https://voh.com.vn/dinh-duong/can-nang-va-chieu-cao-cua-nu-gioi-bao-nhieu-la-thua-can-beo-phi-511823.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Giảm cân mùa Tết - Cân nặng chuẩn" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/YzjIXwS.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/dinh-duong/giam-can-khong-dung-cach-gay-hau-qua-gi-511849.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Giảm cân mùa Tết - Giảm cân sai cách" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/OD7j2Z6.jpeg"> </a></div>
<div class="random-ad"><a href="https://voh.com.vn/dinh-duong/nguyen-tac-giam-can-an-toan-dam-bao-suc-khoe-the-chat-va-tinh-than-511867.html?utm_source=xsdp&utm_medium=&utm_campaign=mobile_banner" title="Giảm cân mùa Tết - Nguyên tắc giảm cân" rel="sponsored" target="_blank"> <img src="https://i.imgur.com/VyzVeG3.jpeg"> </a></div>
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
