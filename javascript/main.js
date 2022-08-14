document.querySelector('.js-go').addEventListener('click',function(){
    var input = document.querySelector('input').value
    pushToDom(input)
});

document.querySelector('.js-userinput').addEventListener('keyup',function(e){
    var input = document.querySelector('input').value
    if (e.which === 13){
        input = document.querySelector('input').value
        showMeGifs(input)
    }
});


function showMeGifs(input){
    input = input.replaceAll(" ", "+");   
    var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=gYwmQRsashiC6zpInlCkuTDdza6rjhfH";
    var GiphyAjaxCall = new XMLHttpRequest();
    GiphyAjaxCall.open('GET',url)
    GiphyAjaxCall.send();
    GiphyAjaxCall.addEventListener('load',function(e){
    var data = e.target.response
    var container = document.querySelector(".js-container");
    container.innerHTML=null;
    pushToDom(data)
})
}


function pushToDom(input){
var response = JSON.parse(input)
var imageUrl = response.data
imageUrl.forEach(function(img) {
    var src = img.images.fixed_height.url
    var jsCont = document.querySelector('.js-container')
    jsCont.innerHTML +="<img src=\""+ src +"\" class=\"container-image\">"    
});   
}
