const http = require('https');

function fetch(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data = data +rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

fetch('https://www.google.com/')
.then(data => {
    console.log(data.length);
});

(async function read() {
    const data = await fetch('https://www.google.com/');
    console.log(data.length);
})();