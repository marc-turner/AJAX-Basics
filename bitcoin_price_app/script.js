const current = document.querySelector('#current');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            const data = JSON.parse(XHR.responseText);
            const symbol = data.bpi.USD.symbol;
            const rate = data.bpi.USD.rate;
            current.innerHTML = `${symbol}${rate}`;
            console.log(rate);
        }
    };

    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    XHR.open('GET', url);
    XHR.send();
});
