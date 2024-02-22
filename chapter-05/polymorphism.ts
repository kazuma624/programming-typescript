export default null

class MyMap<K, V> {
  constructor(initialKey: K, initialValue: V) {
    // ...
  }
  get(key: K): V {
    // ...
  }
  set(key: K, value: V): void {
    // ...
  }
  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
    // ...
  }
  static of<K, V>(k: K, v: V): MyMap<K, V> {
    // ...
  }
}

// interface MyMap<K, V> {
//   get(key: K): V
//   set(key: K, value: V): void
// }

let a = new MyMap<string, number>('k1', 1) // MyMap<string, number>
let b = new MyMap('k1', true) // MyMap<string, boolean>

a.get('k1')
b.set('k', false)
