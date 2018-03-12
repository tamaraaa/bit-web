const { Genre} = require("./genre")
const {Movie} = require("./movie")
const {Program} = require("./program")
const {Festival} = require("./festival")

function createMovie(title, duration, genre) {
    return new Movie(title, genre, duration)
}

// builder funkcije

function createProgram(dateStr) {
    var date = new Date(dateStr);
    var program = new Program(date)
    return program;
}
// var g1 = new Genre("comedy");
var fest = new Festival("Pacofil");
var prog1 = createProgram("3 mart 2018");
var prog2 = createProgram("22 mart 2018");
var mov1 = createMovie("Paca lepotica", 25, "comedy");
var mov2 = createMovie("Onko zavodnik", 26, "action");
prog1.addMovie(mov1);
prog1.addMovie(mov2);
prog2.addMovie(mov1);
prog2.addMovie(mov2);
fest.addProgram(prog1);
fest.addProgram(prog2);
console.log(fest.getData());