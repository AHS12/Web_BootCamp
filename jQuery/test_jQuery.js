/**
 * Created by MD AZIZUL HAKIM on 24/07/2017.
 */

//checking if jQuery Loaded?
if (jQuery) {
    console.log("jQuery Loaded!")
} else console.log("jQuery loading Error!!!");


/*we are gonna try some basic jQuery Methods....

 they are:

 1. $() ..this is the querySelectorAll() of js
 2. css() ..Change The Css Properties... able to pass object!!
 3. val() ..This is The value() of js... for getting attribute value
 4. text() ..This is the textContent of js
 5. attr() ..This is for manipulating attributes
 6. html() ..This is The innerHTML of JS
 7. addClass() ..This is Js classList.add()
 8. removeClass() ..This is js classList.remove()
 9. toggleClass() ..This is js classList.toggle()


 */


//1. $();


//language=JQuery-CSS
console.log($("#id4"));
//language=JQuery-CSS
console.log($("ul li a"));


//2. css();

$("h1").css("color", "yellow");
$("#id1").css("border", "2px solid red");

var myStyle = {

    color: "green",
    background: "pink",
    border: "solid 2px steelblue"
};

$("#id3").css(myStyle);

$("li").css(
    {
        fontSize: "40px",
        border: "2px dashed purple",
        background: "rgba(23,25,66,0.2)"
    }
);

$("li:first-of-type").css(myStyle);

//3. text();

console.log($("h1").text());
console.log($("h2").text());
console.log($("ul").text());

$("h3").text("Changing Text Using .text() Method");

//4. html();

console.log($("ul").html());

function changeUl() {
    $("ul").html("<li>Item1 Changed!</li>" +
        "<li>Item2 Changed!</li>" +
        "<li>Item3 Changed!</li>" +
        "<li>Item4 Changed!</li>").css(myStyle)

}

//5. attr()


var size = {
    width: "900px",
    height: "500px"
};

function sizeImg() {
    $("img").css(size);
}
function changeImg() {
    $("img").attr("src", "../Src/anime1.jpg");

}

//changing the input type :p

function changInput() {
    $("input").attr("type", "color");
}

//6. val()

$("input").val("Shovon");
console.log($("input").val());
console.log($("select").val());

//7. 8. 9. all Classes

function addClass() {
    $("h1").addClass("done");
    $("h2").addClass("wrong");
    $("h3").addClass("correct");
}

function toggleClass() {
    $("h3").toggleClass("done");
}

function removeClass() {
    $("h1").removeClass("done");
}

/*Now Advance jQuery Functions

 1. click()
 2. keyPress()
 3. On()
 4. effects()
 */

//1. click()
//$("#addClass").click(addClass());

