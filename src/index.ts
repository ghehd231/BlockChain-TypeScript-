class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}
const genesisBlock: Block = new Block(0, '23232323', '', 'Hello', 12345);

// block-chain : 블록의 연걸
// let blockChain: [Block] ==> typescript에서 블록만 블록체인에 추가하도록 체크함
// blockChain.push('block') => x
let blockChain: [Block] = [genesisBlock];

console.log(blockChain);
export {};
