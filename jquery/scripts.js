var postsURL = 'https://jsonplaceholder.typicode.com/posts';
/**
 * Main table to displaying content. 
 */

/**
* TBody tag element of content table. 
*/


$(document).ready(function () { onReady(); });

function onReady() {
    GetPostsHandler();
    //   PostHandlerHandler();
    HidePostsHandler();
}

function HidePostsHandler() {
        $('#hidePosts').click(function () {
            $('#posts').html('');
        });
}

function GetPostsHandler() {
    $('#GetPosts').click(function () {
        $.get(postsURL, function (data, status, xhr) {
            console.log('status: ' + status);
            console.log('xhr: ' + xhr);
            $(data).each(function (index, el) {
                $('#posts').children('tbody').append('<tr>' +
                    '<td>' + el.id + '</td>' +
                    '<td>' + el.title + '</td>' +
                    '<td>' + el.body + '</td>' +
                    '</tr>');
            });
        });
    });
}