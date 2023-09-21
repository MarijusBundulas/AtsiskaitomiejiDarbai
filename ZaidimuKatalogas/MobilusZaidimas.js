const Zaidimas = require("./Zaidimas");

class MobilusZaidimas extends Zaidimas {
    constructor(data) {
        super(data);

        this.os = data.os;
        this.nuorodos = data.nuorodos;
    }
}

module.exports = MobilusZaidimas;