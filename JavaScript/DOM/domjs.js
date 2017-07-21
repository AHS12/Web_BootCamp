/**
 * Created by MD AZIZUL HAKIM on 20/07/2017.
 */


var p = document.getElementsByTagName("p")[0];

// console.log(p.textContent);
// p.innerHTML = "Super list lol";


function test() {
    var ul = document.querySelector("ul");

    ul.innerHTML = "Super Item <strong>Strong Item</strong>";

}


//adding button listener via js

// var dangerButton = document.querySelector("#dButton");

// var dangerButton = document.getElementById("dButton");
//
// dangerButton.addEventListener("click",function () {
//     alert("Danger Started!! Why did u even bother to press The button!!!");
// },false);


function ulchange() {

    var ul = document.querySelector("ul");
    ul.addEventListener("click", function () {

        alert("Clicked Ul");

    }, false);

}


//toggling the background

var ischanged = false;

function bgChange() {


    if (ischanged === true) {
        document.body.style.background = "white";
    }

    else {
        document.body.style.background = "gray";
    }

    ischanged = !ischanged;

}

function pictureChange() {
//        document.getElementById('img2').src = "../../Src/img1.png";
    document.querySelector("#img2").src = "../../Src/img1.png";
}

function changeText(text) {
    text.innerHTML = "Text has been Changed!";
}

function returnText(text) {
    text.innerHTML = "Image 2"

}

function changeImg(img) {
    img.src = "../../Src/img1.png";
}

function returnImg(img) {
    img.src = "../../Src/img2.jpg";
}

function zoomin(img) {
    img.style.height = "500";
    img.style.width = "500";

}

function zoomout(img) {
    img.style.height = "auto";
    img.style.width = "auto";
}