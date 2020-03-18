document.addEventListener("DOMContentLoaded", function(event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");

thumbnailElement.addEventListener("click", function() {
    if(thumbnailElement.className=="small"){thumbnailElement.className=""}
    else{thumbnailElement.className="small"}
});

var jazzBass = document.getElementById("jazz_bass");

jazzBass.addEventListener("click", function() {
    if(jazzBass.className=="small"){jazzBass.className=""}
    else{jazzBass.className="small"}
});

var pjBass = document.getElementById("pj_bass");

pjBass.addEventListener("click", function() {
    if(pjBass.className=="small"){pjBass.className=""}
    else{pjBass.className="small"}
});

var sixBass = document.getElementById("six_bass");

sixBass.addEventListener("click", function() {
    if(sixBass.className=="small"){sixBass.className=""}
    else{sixBass.className="small"}
});

});


