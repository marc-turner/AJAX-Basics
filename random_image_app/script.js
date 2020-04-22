console.log('CONNECTED');

const button = document.querySelector('#btn');
const photo = document.querySelector('#photo');

// listen for clicks
button.addEventListener('click', function () {
    // make request
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            const url = JSON.parse(XHR.responseText).message;
            // res.data
            console.log(url);
            photo.src = url;
        }
    };

    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
    XHR.send();
});
