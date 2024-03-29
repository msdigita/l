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
                            width: 120px;
                            height: 120px;
                            border-radius: 0%;
                            overflow: hidden;
                            transform: scale(1);
                            transition: transform 0.1s ease;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: url('https://i.imgur.com/ijl65oy.gif') center center / cover no-repeat;
                            animation: flyiconAnimation 2s infinite;
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
                                <a target="_blank" rel="sponsored" href="https://aios.soinluck.com/scene?sk=q82bd2f13bd46e967" style="display: block; width: 100%; height: 100%;"></a>
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
