export default null;

type ClassConstructor<T> = new(...args: any[]) => T

function withEZDebug<C extends ClassConstructor<{
  getDebugValue(): object
}>>(Class: C) {
  return class extends Class {
    debug() {
      let Name = this.constructor.name
      let value = this.getDebugValue()
      return Name + '(' + JSON.stringify(value) + ')'
    }
  }
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}
  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    }
  }
}

class HogeClass {
  constructor(
    private hoge: string
  ){}
  getDebugValue() {
    return {
      hoge: this.hoge
    }
  }
  getHoge() {
    return 'aaa'
  }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
console.log(user.debug())


let Hoge = withEZDebug(HogeClass)
let hoge = new Hoge('aaa')
console.log(hoge.debug())

console.log(hoge.getHoge())