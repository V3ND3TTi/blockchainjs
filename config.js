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

const STARTING_BALANCE = 1000;

const REWARD_INPUT = { address: '*authorized-reward*' };

const MINING_REWARD = 50;

module.exports = { GENESIS_DATA, MINE_RATE, STARTING_BALANCE, REWARD_INPUT, MINING_REWARD };
