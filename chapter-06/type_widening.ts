export default null;

// let a = 'x'
// let b = 3
// var c = true
// const d = {x: 3}

// enum E {X, Y, Z}
// let e = E.X

// const a = 'x' // 'x'
// const b = 3 // 3
// const c = true // true

// enum E {X, Y, Z}
// const e = E.X // E.X

// let a: 'x' = 'x'
// let b: 3 = 3
// var c: true = true
// const d: {x: 3} = {x: 3}

// const a = 'x' // 'x'
// let b = a // string

// const c: 'x' = 'x' // 'x'
// let d = c // 'x'

// let a = null // any
// a = 3 // any
// a = 'b' // any

// function x() {
//   let a = null // any
//   a = 3 // any
//   a = 'b' // any
//   return a
// }

// x() // string
// console.log(typeof(x()))

let a = {x: 3} // {x: number}
let b: {x: 3} // {x: 3}
let c = {x: 3} as const // {readonly x: 3}

// ネストされた変数の型も再帰的に readonly にしてくれる
let d = [1, {x: 2}] // (number | {x: number})[]
let e = [1, {x: 2}] as const // readonly [1, {readonly x: 2}]

type Options = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Options) {}
}

// オプションのプロパティのうち tier を使って API をインスタンス化する
new API({
  baseURL: 'https://api.mysite.com',
  tier: 'prod'
})

// 
new API({
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
})

// 型アサーションを使って
new API({
  baseURL: 'https://api.mysite.com',
  BadTier: 'prod'
} as Options)

// 
let badOptions = {
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
}
new API(badOptions)

// options を明示的に Options と関連付ける
// 
let options: Options = {
  baseURL: 'https://api.mysite.com',
  badTier: 'prod'
}
new API(options)
