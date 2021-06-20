const MINE_RATE = 2;
const INITIAL_DIFFICULTY = 4;

const GENESIS_DATA = {
  blockID: 0,
  timestamp: 1,
  lastHash: 'genesis-lastHash',
  hash: 'genesis-hash',
  nonce: 0,
  difficulty: INITIAL_DIFFICULTY,
  data: ['genesis-data'],
};

module.exports = { GENESIS_DATA, MINE_RATE };
