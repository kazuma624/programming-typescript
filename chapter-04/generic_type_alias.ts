// ジェネリック型エイリアス
// <button /> や <div /> のようなイベントが発生した要素
type MyEvent<T extends HTMLElement = HTMLElement> = {
  target: T
  type: string
}

// 使い方の例
type ButtonEvent = MyEvent<HTMLButtonElement>


let myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector('#myButton'),
  type: 'click'
}

// この TimedEvent のジェネリック T がバインドされる時、 MyEvent にもバインドされる
type TimedEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
}

// 関数のシグネチャの中でも使うことができる
function triggerEvent<T>(event: MyEvent<T>): void {
  // ...
}

triggerEvent({ // T は Element Element | null
  target: document.querySelector('#myButton'),
  type: 'mouseover'
})

/*
1. TypeScript は関数のシグネチャから、渡された引数が MyEvent<T> という型を持っていなければならないことを理解する
2. TypeScript は、渡されたオブジェクトの target フィールドが document.querySelector('#myButton') であることを理解する
3. このことは、 T が document.querySelector('#myButton') が取りうる型でなければならない、
    すなわち Element | null 出なければならないことを意味する
    この時点で、 T は Element | null にバインドされる
4. TypeScript は先に進み、T の全ての出現箇所を Element | null で置き換える
5. TypeScript は、全ての方が割り当て可能性を満たしているかどうかをチェックする。それらは満たしているので、このコードの型チェックは完了する
//*/
