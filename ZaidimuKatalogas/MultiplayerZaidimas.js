const Zaidimas = require("./Zaidimas");

class MultiplayerZaidimas extends Zaidimas {
    constructor(data) {
        super(data);

        this.zaideju_skaicius = data.zaideju_skaicius;
        this.platformos = data.platformos;
        this.crossplay = data.crossplay;

    }
}

module.exports = MultiplayerZaidimas;