const quoteDiv = document.querySelector('#quote');

let quoteText = '';
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
        quoteText = XHR.responseText;
    } else {
        quoteText = 'ERROR';
    }
    quoteDiv.innerText = quoteText;
};

XHR.open('GET', 'https://api.github.com/zen');
XHR.send();
