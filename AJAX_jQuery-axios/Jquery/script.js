console.log('CONNECTED');

$('button').click(function () {
    $.getJSON('https://aws.random.cat/meow?ref=apilist.fun')
        .done(function (data) {
            $('img').attr('src', data.file);
        })
        .fail(function () {
            alert('REQUEST IS NOT PAWSIBBLE');
        });
});

// THIS IS OBSOLETE
