export default null;

// Filter 型の関数を呼び出す度に T に具体的な型がバインドされる
// filter を呼び出す度に T に対してそれぞれのバインドが行われる
type Filter1 = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter1: Filter1 = (array, f) => {
  let result = []
  array.forEach(item => {
    if (f(item)){
      result.push(item)
    }
  })
  return result
}

let arr = [0, 1, 2, 3, 4, 5]

function is_odd (x: number) {
  return x % 2 === 0
}

let is_odd2 = (x: number) => { return x % 2 }

console.log(filter1(arr, is_odd))

// Filter 型の関数を宣言したときに T をバインドする
type Filter2<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}
// let filter2: Filter2<number> = // ...

// 一つ目と同じ（省略記法）
type Filter3 = <T>(array: T[], f: (item: T) => boolean) => T[]
// let filter3: Filter3 = // ...

// 二つ目と同じ（省略記法）
type Filter4<T> = (array: T[], f: (item: T) => boolean) => T[]
// let filter4: Filter4<string> = // ...

// filter を呼び出す度に T に対してそれぞれバインド行われる
function filter5<T>(array: T[], f: (item: T) => boolean): T[] {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

console.log(filter5(arr, is_odd))

