import * as CryptoJs from 'crypto-js';
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  // 일반 method : 블록을 생성했을 때만 사용 가능
  // sayHello() => return 'hello';

  // static method : 클래스가 생성되지 않았어도 호출 할 수 있는 method
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string,
  ): string => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

// Block.calculateBlockHash() => static method 이므로 Block클래스로부터 바로 사용할 수 있음
const genesisBlock: Block = new Block(0, '23232323', '', 'Hello', 12345);

let blockChain: Block[] = [genesisBlock];

//블록체인이 얼마나 긴지 알기 위한 함수
const getBlockchain = (): Block[] => blockChain; //blockChain를 배열 형태로 리턴

//마지막 블록을 리턴 하는 함수
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

//1597308260의 형식으로 숫자 리턴 하는 함수
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(getBlockchain());
console.log(getLatestBlock());
console.log(getNewTimeStamp());
export {};
