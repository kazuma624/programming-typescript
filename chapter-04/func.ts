function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

let res1 = sum([1, 2, 3]);
console.log(res1);

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

let res2 = sumVariadicSafe(1, 2, 3);
console.log(res2);

function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 10, 20);
add.bind(null, 10, 20)() // bind 自体は関数を呼び出さない。関数オブジェクトを返す
;

function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`;
}

console.log(fancyDate.call(new Date()));

// function* でジェネレータを定義する
function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fibonacciGenerator = createFibonacciGenerator(); // Generator<number>
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());

function* createNumbers(): Generator<number> {
  let n = 0;
  while (1) {
    yield n++;
  }
}

let numbers = createNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

// function greet(name: string)
type Greet = (name: string) => string;

// function log(message: string, userId?: string)
type Log = (message: string, userId?: string) => void;

let log: Log = (
  message,
  userId = "Not signed in",
) => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};

log("hoge");

// function sumVariadicSafe(...numbers: number[]): number
type SumVariadicSafe = (...numbers: number[]) => number;

// 文脈的型付け
function times(
  f: (index: number) => void,
  n: number,
) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

times((n) => console.log(n), 4);

function warnUser(warning: string) {
  if (warnUser.wasCalled) {
    return;
  }
  warnUser.wasCalled = true;
  alert(warning);
}

type WarnUser = {
  (warning: string): void;
  wasCalled: boolean;
};

warnUser.wasCalled = false;
const assignedWarnUser: WarnUser = warnUser;

