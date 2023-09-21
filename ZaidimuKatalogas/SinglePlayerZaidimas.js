const Zaidimas = require("./Zaidimas");

class SingleplayerZaidimas extends Zaidimas {
    constructor(data) {
        super(data);

        this.platformos = data.platformos
    }
}

module.exports = SingleplayerZaidimas;