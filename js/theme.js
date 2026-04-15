export function initTheme() {

    const html = document.querySelector('html');
    const themeButton = document.querySelector('.button-theme-toggle');
    const themeIcon = themeButton.querySelector('img');

    function changeContext(context) {

        html.setAttribute('data-contexto', context);
        
        if (context === 'dark') {
            themeIcon.setAttribute('src', 'images/light.png');
        } else {
            themeIcon.setAttribute('src', 'images/dark.png');
        }
    }

    themeButton.addEventListener('click', () => {
        const currentContext = html.getAttribute('data-contexto');
        
        const newContext = currentContext === 'light' ? 'dark' : 'light';
        
        changeContext(newContext);
    });
}