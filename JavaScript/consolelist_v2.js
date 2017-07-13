/**
 * Created by MD AZIZUL HAKIM on 13/07/2017.
 */

console.log("Connected");


var todos = [];
var input = prompt("Enter Something From the List").toUpperCase();

// input.toString().toUpperCase();

// console.log(input);


while (input !== "QUIT") {

    if (input === "ADD") {
        addtodo();
    }
    else if (input === "LIST") {
        showtodo();

        // for (var i = 0; i < todos.length; i++) {
        //     console.log(i+" : " +todos[i]);
        // }
    }

    else if (input === "DELETE") {
        deletetodo();
    }

    input = prompt("Enter Something From the List").toUpperCase();
}

function addtodo() {
    var todo = prompt("Enter a Todo");
    todos.push(todo);
}

function showtodo() {
    console.log(todos);
    console.log("********");
    todos.forEach(function (todo, index) {
        console.log(index + " : " + todo);

    });
    console.log("********");
}

function deletetodo() {
    var index = prompt("Enter the index to Delete!");
    // todos.shift();
    //we are going to use splice() method to delete a index of the array
    todos.splice(index, 1);
    alert("Item Deleted!")
}

console.log("Quited!");
