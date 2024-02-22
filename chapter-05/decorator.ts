export default null

type Payload = {
  // ...
}

@serializable
class APIPayload {
  getValue(): Payload {
    // ...
    return {}
  }
}

type ClassConstructor<T> = new(...args: any[]) => T

function serializable<
  T extends ClassConstructor<{
    getValue(): Payload
  }>
>(Constuctor: T) {
  return class extends Constuctor {
    serialize() {
      return this.getValue().toString()
    }
  }
}

// let payload = new APIPayload
// let serialized = payload.serialize()


let DecoratedAPIPayload = serializable(APIPayload)
let payload = new DecoratedAPIPayload
payload.serialize()
