customElements.define('flyicon-ad', class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const currentArticleURL = window.location.href; // Get the current article URL
        const dynamicLink = 'https://beta.voh.com.vn' + currentArticleURL; // Construct the dynamic link
        shadowRoot.innerHTML = `
            <!-- ... (Your existing styles and HTML) ... -->
            <div class="msdigital-flyicon-2">
                <a target="_blank" rel="sponsored" href="${dynamicLink}" style="display: block; width: 100%; height: 100%;"></a>
            </div>
        `;

        // Add click event listener to close button
        shadowRoot.querySelector('.msdigital-flyicon-btnclose-2').addEventListener('click', () => {
            this.style.display = 'none';
        });
    }
});
