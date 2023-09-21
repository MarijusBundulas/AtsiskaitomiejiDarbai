const Zaidimas = require("./Zaidimas");

class InternetinisZaidimas extends Zaidimas {
    constructor(data) {
        super(data);

        this.data = data.nuoroda;
        this.data = data.narsykles;
    }
}

module.exports = InternetinisZaidimas;