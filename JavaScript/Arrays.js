/**
 * Created by MD AZIZUL HAKIM on 11/07/2017.
 */


var colors = ["Red", "Green", "yellow"];
console.log(colors);
colors.push("White");
console.log(colors);
colors.pop();
console.log(colors);
colors.push("Green");
colors.push("Yellow");
colors.unshift("Green with Shift");
console.log(colors);
colors.shift();

console.log(colors.indexOf("Yellow"));
console.log(colors);


var partOfColor = colors.slice(0, 3);
console.log(partOfColor);


