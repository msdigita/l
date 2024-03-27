customElements.define('flyicon-ad', class extends HTMLElement {
    constructor() {
        super();
        // Get current time
        const currentTime = new Date();
        // Get current hour and minute
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();
        
        // Check if current time is within the specified time ranges
        const isInActiveTimeRange = (
            (currentHour === 16 && currentMinute >= 5 && currentMinute < 35) ||
            (currentHour === 17 && currentMinute >= 5 && currentMinute < 35) ||
            (currentHour === 18 && currentMinute >= 5 && currentMinute < 35)
        );

        // If current time is not within the active time ranges, do not display the flyicon
        if (!isInActiveTimeRange) {
            setTimeout(() => {
                const shadowRoot = this.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = `
                    <!-- CSS styles for flyicon -->
                    <style>
                        .msdigital-ads-box[data-msdigital-codeid="2"] {
                            position: fixed;
                            right: 18px;
                            top: 40%;
                            z-index: 1000;
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
                            background: url('https://i.imgur.com/ijl65oy.gif') center center / cover no-repeat;
                            animation: flyiconAnimation 1s infinite;
                        }

                        /* Add animation keyframes */
                        @keyframes flyiconAnimation {
                            0% {
                                transform: scale(1);
                            }
                            50% {
                                transform: scale(1);
                            }
                            100% {
                                transform: scale(1);
                            }
                        }
                    </style>

                    <!-- HTML content for the flyicon -->
                    <div class="msdigital-ads-box" data-msdigital-codeid="2" class="msdigital-type-flyicon">
                        <div class="msdigital-flyicon-box">
                            <span class="msdigital-flyicon-btnclose-2">
                                <svg viewBox="0 0 16 16" stroke="#EE4D2D" class="home-popup__close-button" style="height: 15px; width: 15px; stroke: rgba(0, 0, 0, 0.5); stroke-width: 2px;">
                                    <path stroke-linecap="round" d="M1.1,1.1L15.2,15.2"></path>
                                    <path stroke-linecap="round" d="M15,1L0.9,15.1"></path>
                                </svg>
                            </span>
                            <div class="msdigital-flyicon-2">
                                <a target="_blank" rel="noopener noreferrer" href="https://aios.soinluck.com/scene?sk=q82bd2f13bd46e967" style="display: block; width: 100%; height: 100%;"></a>
                            </div>
                        </div>
                    </div>
                `;

                // Select the close button and add click event listener
                const closeButton = shadowRoot.querySelector('.msdigital-flyicon-btnclose-2');
                closeButton.addEventListener('click', () => {
                    // Remove the flyicon when the close button is clicked
                    this.remove();
                });
            }, 10000); // Delay of 15 seconds (15000 milliseconds)
        } else {
            // If current time is within the active time ranges, do not display the flyicon
            this.remove();
        }
    }
});
