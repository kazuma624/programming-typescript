export default null;

class Animal {}
class Bird extends Animal {
  chirp() {}
}

class Crow extends Bird {
  caw() {}
}

function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird
}

chirp(new Animal) // Error
chirp(new Bird) // 指定された型なので渡すことができる
chirp(new Crow) // Bird のサブタイプなので渡すことができる

function clone(f: (b: Bird) => Bird): void {
  let parent = new Bird
  let babyBird = f(parent) // f の戻り値は Bird クラスもしくは Crow クラスしかとり得ない
  babyBird.chirp() // Animal クラスには chirp メソッドは定義されていない
}

function birdToBird(b: Bird): Bird {
  // ...
  return b
}
clone(birdToBird) // OK

function birdToCrow(d: Bird): Crow {
  // ...
  return new Crow
}
clone(birdToCrow) // OK

function birdToAnimal(d: Bird): Animal {
  // ...
  return new Animal
}
clone(birdToAnimal) // Error

function animalToBird(a: Animal): Bird {
  // ...
  return new Bird
}
clone(animalToBird) // OK

function crowToBird(c: Crow): Bird {
  c.caw() // .caw() は Crow のみで定義されており c に Bird 型を渡すことはできない
  return new Bird
}
clone(crowToBird) // Error
// (c: Crow) => Bird の引数を (b: Bird) => Bird のパラメータに割り当てることはできない


