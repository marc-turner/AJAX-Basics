console.log('CONNECTED');

// const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// fetch(url).then(function (data) {
//     console.log(data);
// });

// fetch(url)
//     .then(function (res) {
//         console.log(res);
//         return res.json();
//     })
//     .then(function (data) {
//         console.log(data.bpi.USD.rate);
//     });

// fetch error handling

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const url = 'https://api.github.com/users/colt';
    fetch(url)
        .then(function (request) {
            if (!request.ok) {
                throw Error(request.status);
            }
            return request;
        })
        .then(function (request) {
            console.log('FINE');
        })
        .catch(function (error) {
            console.log(error);
        });
});
