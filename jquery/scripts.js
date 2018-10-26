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

    SendPostHandler();

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
               appendPost(el);
            });
        });
    });
}


function SendPostHandler(){
    $('#send').click(function(){
        let id = $('userId').value;
        let body = $('body').value;
        let title = $('title').value;

        let obj = {'userId': userId, 'body':body,'title':title};


        $.Post(postsURL,JSON.stringify(obj),function callback(data,status,xhr){
                if(status === 201){
                    $(data).each(function(index,el){appendPost(el);});
                }
        }, );

    });

    
}   

function appendPost(el){
    $('#posts').children('tbody').append('<tr>' +
    '<td>' + el.id + '</td>' +
    '<td>' + el.title + '</td>' +
    '<td>' + el.body + '</td>' +
    '</tr>');
}