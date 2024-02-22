export default null;

// ビルダーパターン
// オブジェクトの構築と、そのオブジェクトを実際に実装する方法を分離する

// setURL と setMethod を呼び出さないと send メソッドが呼び出せないようにする

class RequestBuilder {
  protected data: object | null = null
  protected method: 'get' | 'post' | null = null
  protected url: string | null = null

  setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
    return new RequestBuilderWithMethod()
      .setMethod(method)
      .setData(this.data)
  }
  setData(data: object | null): this {
    this.data = data
    return this
  }
}

// RequestBuilder を継承
class RequestBuilderWithMethod extends RequestBuilder {
  setMethod(method: 'get' | 'post' | null): this {
    this.method = method
    return this
  }
  setURL(url: string): RequestBuilderWithMethodAndURL {
    return new RequestBuilderWithMethodAndURL()
      .setMethod(this.method)
      .setURL(url)
      .setData(this.data)
  }
}

// RequestBuilderWithMethod を継承
class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod {
  setURL(url: string): this {
    this.url = url
    return this
  }
  send() {
    console.log('sent.')
  }
}

let a: RequestBuilderWithMethodAndURL = new RequestBuilder()
  .setMethod('get')
  .setData({firstName: 'Anna'})
  .setURL('/users')

console.log(a)
a.send()

let b: RequestBuilderWithMethodAndURL = new RequestBuilderWithMethodAndURL()
  .setMethod('get')
  .setData({firstName: 'Anna'})
  .setURL('/users')

console.log(b)
b.send()
