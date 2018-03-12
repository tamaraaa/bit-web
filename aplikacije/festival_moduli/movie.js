function Movie(title, genre, duration) {
    this.title = title;
    this.genre = new Genre(genre).getData();
    this.duration = duration;
    
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.duration + "min, " + this.genre;
}

module.exports = {
    Movie
}
const { Genre} = require("./genre")