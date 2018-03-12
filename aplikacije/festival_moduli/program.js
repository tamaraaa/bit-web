function Program(date) {
    this.date = date;
    this.listOfMovies = [];
}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
}

Program.prototype.getData = function () {
    var sumLength = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        sumLength += this.listOfMovies[i].duration;
    }

    var date = this.date;
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    var result = dateStr + ", duration of festival is " + sumLength + " minutes" + "\n";

    for (var i = 0; i < this.listOfMovies.length; i++) {
        result += "\t\t" + this.listOfMovies[i].getData() + "\n";
    }

    return result;
}
module.exports = {
    Program
}