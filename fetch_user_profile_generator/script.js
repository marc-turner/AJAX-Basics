const url = 'https://randomuser.me/api/';

const name = document.querySelector('.name');
const userid = document.querySelector('.userid');
const email = document.querySelector('.email');
const city = document.querySelector('.city');
const btn = document.querySelector('.btn');
const pic = document.querySelector('img');

btn.addEventListener('click', function () {
    console.log('Clicked');
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(displayErrors);
});

function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res) {
    return res.json().then(function (data) {
        return data.results[0];
    });
}

function updateProfile(data) {
    name.innerHTML = `${data.name.first} ${data.name.last}`;
    userid.innerHTML = data.login.username;
    email.innerHTML = `Email: ${data.email}`;
    city.innerHTML = `City: ${data.location.city}`;
    pic.src = data.picture.medium;
}

function displayErrors(err) {
    console.log(err);
}
