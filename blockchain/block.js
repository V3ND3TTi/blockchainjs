const { GENESIS_DATA } = require('../config');
const cryptoHash = require('../util/crypto-hash');

class Block {
    constructor({ blockID, timestamp, lastHash, hash, data, nonce, difficulty }) {
        this.blockID = blockID;
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    static genesis() {
        return new Block(GENESIS_DATA);
    }

    static mineBlock({ lastBlock, data }) {
        const blockID = lastBlock.blockID + 1;
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const nonce = 0;
        const difficulty = 2;

        return new this({
            blockID,
            timestamp,
            lastHash,
            data,
            nonce,
            difficulty,
            hash: cryptoHash(timestamp, lastHash, data, nonce, difficulty)
        });
    }
}

module.exports = Block;