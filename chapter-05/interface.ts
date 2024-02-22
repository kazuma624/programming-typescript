export default null;

// type を使った定義
type Food1 = {
  calories: number
  tasty: boolean
}
type Sushi1 = Food1 & {
  salty: boolean
}
type Cake1 = Food1 & {
  sweet: boolean
}

// interface を使った定義
interface Food2 {
  calories: number
  tasty: boolean
}
interface Sushi2 extends Food2 {
  salty: boolean
}
interface Cake2 extends Food2 {
  sweet: boolean
}

// type A = {
//   good(x: number): string
//   bad(x: number): string
// }

// type B = A & {
//   good(x: string | number): string
//   bad(x: string): string
// }

interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  name = 'Whiskers'
  eat(food: string) {
    console.log('Ate some', food, '. Mmm!')
  }
  sleep(hours: number) {
    console.log('Slept for', hours, 'hours')
  }
  meow() {
    console.log('Meow')
  }
}

let cat = new Cat
cat.eat('hoge')
cat.sleep(1)

class Zebra {
  trot() {
    // ...
  }
}

class Poodle {
  trot() {
    // ...
  }
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle) // Poodle は Zebra と同じ形状を持ち割り当て可能なのでエラーにならない

class A {
  private x = 1
  // x = 1
}
class B extends A {}
function f(a: A) {}

f(new A) // OK
f(new B) // OK

// Argument of type '{ x: number; }' is not assignable to parameter of type 'A'.
//   Property 'x' is private in type 'A' but not in type '{ x: number; }'.ts(2345)
f({x: 1})
// {x: number;} の引数を型 'A' のパラメータに割り当てることはできない
// プロパティ 'x' は型 'A' ではプライベートだが、型 {x: number;} ではプライベートではない

class C {}
let c: C
  = new C

enum E {F, G}
let e: E
  = E.F

