export default null;

// 使い方イメージ
// let set = new Set
// set.add(1).add(2).add(3)
// set.has(2) // true
// set.has(4) // false


class Set {
  has(value: number): boolean {
    // ...
  }
  // Set ではなく this を指定することで継承したクラス側でオーバーライドする必要がなくなる
  add(value: number): this {
    // ...
  }
}

class MutableSet extends Set {
  delete(value: number): boolean {
    // ...
  }
}

