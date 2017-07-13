/**
 * Created by MD AZIZUL HAKIM on 05/06/2017.
 */


// console.log("Hello World!");
// var s = "Lol";
// var x = "Double Lol";
// console.log(s + " " + x);

alert("Fuck U");

var name = prompt("Enter Your Age: ");
parseInt(name);
console.log(name);
alert(name * 365);
document.write(name * 365);
document.write("<br>");

// functon replacechar(givenSytring){
//    var convertedStr =  givenSytring.replace(/-/g,"_");
//    return convertedStr;
// }

function replacechar(givenStr) {
    var convertedStr = givenStr.replace(/-/g, "_");
    return convertedStr;
}

var userStr = prompt("Enter Your String with '-' ", "");

document.write(replacechar(userStr));
alert(replacechar(userStr));
