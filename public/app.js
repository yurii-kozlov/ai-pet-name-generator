if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then()
    .catch((err) => console.error('Error', err));
}
