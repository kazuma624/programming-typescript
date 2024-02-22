function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}

console.log(
  map(
    [1, 2, 3],
    (n: number) => {return n * 2}
  )
)

let res = map <string, boolean | string> (
  ['a', 'b', 'c'], // T の配列
  _ => _ === 'a' // U を返す関数
)

console.log(res)

let promise = new Promise <number> (resolve =>
  resolve(45)
)
promise.then(result =>
  result * 4
)


