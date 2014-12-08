/**
 * Created by Chase on 10/19/2014.
 */
$(document).ready(function () {
    var showColors = fetch.bind(null, 'colors');
    var showPalettes = fetch.bind(null, 'palettes');
    var showPatterns = fetch.bind(null, 'patterns');

    $('.showColors').on('click', showColors);
    $('.showPalettes').on('click', showPalettes);
    $('.showPatterns').on('click', showPatterns);

    function fetch(resource) {
        console.log('Fetching');

        var url = 'http://www.colourlovers.com' +
            '/api/' + resource + '/new' +
            '?format=json&jsonCallback=resourceResponse';

        $.ajax(url, {
                   dataType: 'jsonp'
               }
        );
    }

});

function resourceResponse(result) {
    var list = $("#display");
    list.empty();
    for (var i = 0; i < result.length; i++) {
        list.append(createItem(result[i]));
    }
}

function createItem(item) {
    return  '<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6"><div class="thumbnail">' +
        '<img class="image" src="' + item.imageUrl + '"/>' +
        '<div class="title caption"><h4 style="text-align: center">' + item.title + '</h4></div>' +
        '</div></div>';
}

function updateCarouselBackground() {

}