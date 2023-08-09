customElements.define('flyicon-ad', class extends HTMLElement {
            constructor() {
                super();
                const shadowRoot = this.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = `
                    <style>
                        .msdigital-ads-box[data-msdigital-codeid="2"] {
                            position: fixed;
                            left: 18px;
                            bottom: 10%;
                            z-index: 10000;
                        }

                        /* Your flyicon CSS goes here */
                        /* ... (All the CSS styles for the flyicon) ... */
                        .msdigital-flyicon-box {
                            display: inline-block;
                            overflow: hidden;
                            text-align: right;
                            padding: 3px;
                        }

                        .msdigital-flyicon-btnclose-2 {
                            cursor: pointer;
                            user-select: none;
                            line-height: 35px;
                            height: 20px;
                            width: 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            box-sizing: border-box;
                            background: rgb(239, 239, 239);
                            top: -8px;
                            right: -3px;
                            border-radius: 50%;
                            border: 3px solid rgb(239, 239, 239);
                        }

                        .msdigital-flyicon-2 {
                            width: 70px;
                            height: 70px;
                            border-radius: 100%;
                            overflow: hidden;
                            transform: scale(1);
                            transition: transform 0.5s ease;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: url('https://image-us.24h.com.vn/upload/3-2019/images/2019-09-13/1568338391-371-sau-khi-boc-hoi-gan-3-gia-dau-the-gioi-tiep-da-giam-1-1568338296-width500height405.jpg') center center / cover no-repeat;
                            animation: flyiconAnimation 1s infinite;
                        }

                        /* Add animation keyframes */
                        @keyframes flyiconAnimation {
                            0% {
                                transform: scale(1);
                            }
                            50% {
                                transform: scale(0.8);
                            }
                            100% {
                                transform: scale(1);
                            }
                        }
                    </style>

                    <div class="msdigital-ads-box msdigital-type-flyicon" data-msdigital-codeid="2">
                        <div class="msdigital-flyicon-box">
                            <span class="msdigital-flyicon-btnclose-2">
                                <svg viewBox="0 0 16 16" stroke="#EE4D2D" class="home-popup__close-button" style="height: 15px; width: 15px; stroke: rgba(0, 0, 0, 0.5); stroke-width: 2px;">
                                    <path stroke-linecap="round" d="M1.1,1.1L15.2,15.2"></path>
                                    <path stroke-linecap="round" d="M15,1L0.9,15.1"></path>
                                </svg>
                            </span>
                            <div class="msdigital-flyicon-2">
                                <a target="_blank" rel="sponsored" href="https://voh.com.vn/chinh-tri-xa-hoi/diem-tin-trua-9-8-gia-xang-dau-trong-nuoc-kho-giam-xuat-khau-rau-qua-tang-manh-490448.html?utm_source=xsdp&utm_medium=notify&utm_campaign=flyicon&utm_id=xsdp_flyicon" style="display: block; width: 100%; height: 100%;"></a>
                                <!-- Setting display:block and width/height: 100% to make the anchor clickable with full dimensions -->
                            </div>
                        </div>
                    </div>
                `;

                // Add click event listener to close button
                shadowRoot.querySelector('.msdigital-flyicon-btnclose-2').addEventListener('click', () => {
                    this.style.display = 'none';
                });
            }
        });
