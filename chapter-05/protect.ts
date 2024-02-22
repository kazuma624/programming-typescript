export default null;

class A {
  protected constructor() {}
}

class C {
  public constructor() {}
}

class B extends A {} // OK

class D extends C {}

new A() // Error
new B() // Error

new C()
new D()
