/**
 * Created by MD AZIZUL HAKIM on 13/07/2017.
 */

var demoobj = {
    // name:"Shovon",
    // Breed:"Human",

    name: "lol",
    Breed: "lul"
};

console.log(demoobj);

demoobj.color = "red";
demoobj.age = 6;
console.log(demoobj);

console.log(demoobj.Breed);


var person = new Object();

person.name = "hello";
person.city = "loulou";
person.age = 55;

console.log(person);

//array and object;


//noinspection JSAnnotator
var posts = [
    {
        title: "post 1",
        likes: 6,
        comments: ["comm1", "comm2"]
    },

    {
        title: "post 2",
        likes: 7,
        comments: ["Comm2", "Comm4"]
    }

];

console.log(posts[0].title);
console.log(posts[1].comments);
console.log(posts[0].likes);
console.log(posts[1].comments[0]);


var movies = [

    {
        names: "Frozen",
        rating: 5,
        isWatched: true
    }
    ,
    {
        names: "The Martian",
        rating: 5,
        isWatched: true
    }
    ,

    {
        names: "The Burges",
        rating: 4.5,
        isWatched: false
    }

];

console.log(movies);

movies.forEach(function (movie) {
    movielistbuilder(movie);
});

function movielistbuilder(movie) {

    var result = "You have ";

    if (movie.isWatched) {
        result = result + "Watched";
    }
    else result = result + "Not Watched";


    result = result + " " + movie.names + " with " + movie.rating + " rating";

    console.log(result);
}

var object = {

    add: function (x, y) {
        return x + y;
    }

};

console.log(object.add(4, 5));





