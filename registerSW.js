if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/robofriends-ztm/sw.js', { scope: '/robofriends-ztm/' })})}