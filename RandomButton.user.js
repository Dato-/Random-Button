// ==UserScript==
// @name pr0 Random-Button
// @namespace 
// @author 
// @description Zufälliger Post
// @include http://pr0gramm.com/*
// @version 1.1
// @grant none
// @require http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js
// @updateURL https://github.com/Dato-/Random-Button/blob/master/RandomButton.user.js

// ==/UserScript==
(function() {


var wheelLast = 0;
var high = $(window).height()-51;
var highitemimage = $(window).height()-200;
var highcontainer = $(window).height()-52;
var widthitemimage = $(window).width()-600;
// Random Button
$('#head-content').append('<a class="link" id="random" href=""></a>');

/****/// CSS
var css = 
'#random { display: block; position: relative; top: 16px; margin-left: 900px; height: 16px; width: 16px; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAARCQAAEQkAGJrNK4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEfSURBVHjazNK/K8VRHMbx1/dehIVbSpcJJWVguFKMRmUxGCibP8Ji8g8Y7mIxmxgYLEpXGUgokx+DhQhd9+tH0rUc+k7X9WPwWU6ncz7v8zyf80TlctlvK+UP6v9Aah4e4+R+BgNIV+h5wz7yn5DE4SzmvyGgFXMQFeMSjGH1B04msPwxk2bE3wQ8o+ljsBFekMNKlYA19KOIdFSMSwUMYxuT2ME1znATXqxHBh3IYgiLGMFuDQYDfRjj6EEvWoLN2vAjdwF+jKkAgFxUjEt9WEcbnnCB7gpWToOaRlxhNIUDbIQLDV8AoCsAYBN7qUSAflJvybDl0R5UdFbRfI4TLCQhR9hCAUtfKIswHdbDZGIzuMUr6qpQch+ClsXl+wCQR0NjActcNgAAAABJRU5ErkJggg==);} '+
'#random:hover { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAARCQAAEQkAGJrNK4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEaSURBVHjazNO/K8RxHMfxx/fuCAtXSseEklLHcKJuNOosykLZbP4BA5N/wHCLxZ9gYbAoPzYSyuTHYCE6UkK6zvK5+k7uDoPX8unz4/38vF593p+oUqn4rRL+QP8HEpUK2fh8AaNIflNTxgmK1YVUbHMJqw0Y6MJKPM5UgwBYxkwc0oHXBiHvaK9CInwgh806AVsYwQuSKewjj0PMYhwPuMZjuLEFafQig0WsYwJHKYwFeh7TGMQQOkPMpvAiTwF+gbkAgFxUKmSHsY1uvOEWA99EuQpu2nCPyQROsRMOtNYAQH8AwC6OE7EG+onK8WYroie46Kuj+AaXWItDzrGHA2zUcBZhPoxn8b+TRgmfaK7DyXNotAzuvgYAbyA4nkq8OzEAAAAASUVORK5CYII=); cursor: pointer;}'+
'.head-menu { left: 125px; position: absolute;}'+
'.ssb_up {display:none;cursor:pointer;position:absolute;right:0;top:0;}';

  
  // CSS Style hinzufügen
if (typeof GM_addStyle != "undefined") {
GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
addStyle(css);
} else {
var node = document.createElement("style");
node.type = "text/css";
node.appendChild(document.createTextNode(css));
var heads = document.getElementsByTagName("head");
if (heads.length > 0) {
heads[0].appendChild(node);
} else {
document.documentElement.appendChild(node);
}
}


  // Random Button aktualisieren
 setInterval(function() {
var dingsda = document.getElementById('random');
if (dingsda.getAttribute('href') == '') {
insertButton();
 }
}, 100);


  // Code für den Random Button
function getImage() {
var lastId = localStorage.getItem('pr0lastId');
if (!lastId) {
if ($('.stream-row a:first').length) {
lastId = $('.stream-row a:first').attr('id');
}else{
lastId = 137544;
}
localStorage.setItem('pr0lastId', lastId);
}
return Math.floor((Math.random() * lastId) + 1);
}
function insertButton() {
var div = document.getElementsByClassName('head-menu')[0];
var imageId = getImage();
dingsda = document.getElementById('random');
dingsda.setAttribute('href', 'http://pr0gramm.com/new/' + imageId);
}

})();

//Danke Seglor!
