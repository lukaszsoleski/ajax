let postsURL = "https://jsonplaceholder.typicode.com/posts";
/**
 * Main table to displaying content. 
 */
let contentTable = $('#posts');
/**
 * TBody tag element of content table. 
 */
let tbodyCT = contentTable.getElementsByTagName('tbody')[0];



$(document).ready(function(){onReady();});

function onReady(){
    GetPostsHandler();
    PostHandlerHandler();
    HidePostsHandler();
}

function HidePostsHandler(){
    $('#hidePosts').click(function(){
        tbodyCT.innerHTML = ""; 
    });
    
}

function GetPostsHandler(){
    $('#GetPosts').click(function(){
        $.get(postsURL,function(data,status,xhr){
            if(status == 4 && ){

            }
            data.each(function(){

            });
        });
    });
}

function PostHandler(){

}


    $("#hidePosts").click(function(){
        $("#posts").hide();
    });

    $("#getPosts").click(function(){
       
        

        $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
            $(data).each(function ($i, $post) {
                $("#posts").append("<tr>" +
                        "<td>" + $post.id + "</td>" + 
                        "<td>" + $post.title + "</td>" +
                        "<td>" + $post.body + "</td>" +
                        "</tr>" );


            
            });
        });


        
    });












    function StartNewRow(data){
        tbodyCT.innerHTML += "<tr><td>" + data + "</td>";
    }
    function EndRow(){
        tbodyCT.innerHTML += "</td>"; 
    }

    function AppendCell(data){
        tbodyCT.innerHTML += "<td>" + data + "</td>";
    }
