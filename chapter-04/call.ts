export default null;

// 何かしらの型の入れるものを継承したジェネリック型 T
// それとは別のジェネリック型 R
// function call<T extends unknown[], R>( // 可変長引数は 配列型を継承する
//   f: (...args: T) => R, // f は可変長引数の関数
//   ...args: T // f が取る引数と同じもの
// ): R {
//   return f(...args)
// }


function call<T extends [unknown, string, ...unknown[]], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args)
}

function fill(length: number, value: string): string[] {
  return Array.from({length}, () => value)
}

let a = call(fill, 10, 'a') // fill(10, 'a') と同じ

console.log(a);

function fillNum(length: number, value: number): number[] {
  return Array.from({length}, () => value)
}

let b = call(fillNum, 10, 2)
