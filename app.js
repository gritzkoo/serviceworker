window.addEventListener('load', e => {
    if('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('sw.js');
            console.log(`SW init`);
        } catch (error) {
            console.log(`SW fail`);
        }
    }
});