function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numOfMovies = 0;
}

Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);
}

Festival.prototype.getData = function () {
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        this.numOfMovies += this.listOfPrograms[i].listOfMovies.length;
    }
    var result = "Festival " + this.name + " has " + this.numOfMovies + " movie titles" + "\n";
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        result += "\t" + this.listOfPrograms[i].getData() + "\n";
    }
    return result;

}

module.exports = {
    Festival
}