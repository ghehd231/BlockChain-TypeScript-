import * as CryptoJs from 'crypto-js';
class Block {
  // static method : 클래스가 생성되지 않았어도 호출 할 수 있는 method
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string,
  ): string => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.previousHash === 'string' &&
    typeof aBlock.data === 'string' &&
    typeof aBlock.timestamp === 'number';

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

let blockChain: Block[] = [genesisBlock];

//블록체인이 얼마나 긴지 알기 위한 함수
const getBlockchain = (): Block[] => blockChain; //blockChain를 배열 형태로 리턴

//마지막 블록을 리턴 하는 함수
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

//1597308260의 형식으로 숫자 리턴 하는 함수
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data,
  );
  const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

  return newBlock;
};

// console.log(createNewBlock('hello'), createNewBlock('Bye Bye'));

//블록체인의 기반은 블록들이 자신의 전 블록으로의 링크가 있다는 것
//블록이 유효한지 체크하는 함수 (이전 블록과 비교)
const isBlockvaild = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    //블록의 구조가 유효한지 체크
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    //이전 블록과 현재 블록의 인덱스가 증가 됐는지 체크?
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    //해쉬값이 다른지 체크
    return false;
  }
};
export {};
