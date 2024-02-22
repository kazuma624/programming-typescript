export default null;

// ファクトリーパターン
// 何らかのオブジェクトを作成するための方法
// どのような具体的なオブジェクトを作成すべきかの決定を、
// そのオブジェクトを作成する特定のファクトリーに任せる

// 大元のクラスを定義
type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

// シグネチャのオーバーロード
type ShoeCreator = {
  create(type: 'balletFlat'): BalletFlat
  create(type: 'boot'): Boot
  create(type: 'sneaker'): Sneaker
}

// 値と型では異なる名前空間を持つため、どちらも Shoe を使っている
let Shoe: ShoeCreator = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}

console.log(Shoe.create('boot'))
console.log(Shoe.create('balletFlat'))
console.log(Shoe.create('sneaker'))
// console.log(Shoe.create('boot').purpose)