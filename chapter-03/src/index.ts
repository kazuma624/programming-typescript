// 普通の関数
function greet(name: string) {
  return 'hello ' + name
}

// 無名関数
let greet2 = function(name: string) {
  return 'hello ' + name
}

// 無名関数の短縮記法その1
let greet3 = (name: string) => {
  return 'hello ' + name
}

// 無名関数の短縮記法その2
let greet4 = (name: string) => 'hello ' + name

// コンストラクタを使う（関数の中身についてチェックできないので非推奨）
let greet5 = new Function('name', 'return "hello " + name')

console.log('greet', greet('hoda'))
console.log('greet2', greet2('hoda'))
console.log('greet3', greet3('hoda'))
console.log('greet4', greet4('hoda'))
console.log('greet5', greet5('hoda'))

type Context = {
  appId?: string
  userId?: string
}

function log(message: string, context: Context = {}) {
  let time = new Date().toISOString()
  console.log(time, message, context.userId)
}

let con1: Context = {
  appId: 'app01'
}

let con2: Context = {
  appId: 'app02',
  userId: 'user02'
}

let con3: Context = {}

log('Page loaded')
log('User signed in', con1)
log('User signed in', con2)
log('User signed in', con3)
