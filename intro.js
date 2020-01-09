function myHistoryFunction() {
  var x = document.getElementsByTagName("p2");
	document.getElementById("demo").innerHTML ='The history: ' + x[0].innerHTML;
}
//adauga buton care insereaza textul 
const image= document.createElement('img');
image.src="https://reshape.sport1.de/c/t/31F33436-C126-11E9-B08E-B8CA3A67761C/640x0";
document.body.appendChild(image);
image.style.width="100%"; // adauga poza din js


var x = document.createElement("video");

if (x.canPlayType("video/mp4")) {
    x.setAttribute("src","Dortmund.mp4");
} else {
    x.setAttribute("src","Dortmund.ogg");
}

x.setAttribute("width", "320");
x.setAttribute("height", "240");
x.setAttribute("controls", "controls");
document.getElementById("video").appendChild(x); //adauga video din js

var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = 'audio.mp3';
sound.type     = 'audio/mpeg';
document.getElementById('song').appendChild(sound);//adaugare audio cu js

$(document).ready(function() {
    $("#button").click(function() {
        $.ajax({
            url : "https://my-json-server.typicode.com/Alin98/demo",
            dataType: "jsonp",
            type:"GET",
     
            success : function (data) {
                console.log(data);
            }
        });

    });
}); 

