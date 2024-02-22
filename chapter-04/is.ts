export default null;

// 引数が二つの場合限定
// function is<T>(a: T, b: T): boolean {
//   return a === b
// }

// 任意の数の引数を使えるようにする
function is<T>(a: T, ...b: [T, ...T[]): boolean {
  return b.every(_ => _ === a)
}
// [T, ...T[]] は最低限ジェネリック型 T を指定する必要があること、そしてその後ろに同じ型の任意の数の引数を指定できる

console.log(is('string', 'otherstring')); // false
console.log(is(true, false)); // false
console.log(is(42, 42)); // true

// console.log(is(10, 'foo')); // Error

console.log(is(1, 1, 1)); // true
console.log(is(1, 2, 3)); // false
console.log(is(1, 2, 3, 4)); // false
