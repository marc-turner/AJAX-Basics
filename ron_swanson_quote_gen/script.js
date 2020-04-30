var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteDiv = document.getElementById('quote');
let quoteText = '';

const xhrBtn = document.getElementById('xhr');

xhrBtn.addEventListener('click', function () {
    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            quoteText = JSON.parse(XHR.responseText);
        }

        quoteDiv.innerText = quoteText;
    };

    XHR.open('GET', url);
    XHR.send();
});

const fetchBtn = document.getElementById('fetch');

fetchBtn.addEventListener('click', function () {
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            quoteText = data[0];
            quoteDiv.innerText = quoteText;
        })
        .catch(function (err) {
            console.log(err);
        });
});

$('#jquery').click(function () {
    $.getJSON(url)
        .done(function (data) {
            $('#quote').text(data[0]);
        })
        .fail(function () {
            alert('REQUEST IS NOT PAWSIBBLE');
        });
});

const axiosBtn = document.getElementById('axios');

axiosBtn.addEventListener('click', function () {
    axios.get(url).then(function (res) {
        quoteText = res.data[0];
        quoteDiv.innerText = quoteText;
    });
});
