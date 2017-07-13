/**
 * Created by MD AZIZUL HAKIM on 13/07/2017.
 */
console.log("Connected");


var todos = [];
var input = prompt("Enter Something From the List").toUpperCase();

// input.toString().toUpperCase();

console.log(input);


while (input !== "QUIT") {

    if (input === "ADD") {
        var todo = prompt("Enter a Todo");
        todos.push(todo);
    }

    else if (input === "LIST") {
        console.log(todos);

        for (var i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
    }

    else if (input === "DELETE") {
        todos.shift();
    }

    input = prompt("Enter Something From the List").toUpperCase();
}

console.log("Quited!");


