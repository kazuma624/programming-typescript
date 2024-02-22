export default null;

// ビルダーパターン
// オブジェクトの構築と、そのオブジェクトを実際に実装する方法を分離する
class RequestBuilder {
  private data: object | null = null
  private method: 'get' | 'post' | null = null
  private url: string | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }
  setData(data: object): this {
    this.data = data
    return this
  }
  setURL(url: string): this {
    this.url = url
    return this
  }
  send() {
    console.log('sent.')
  }
}

let a: RequestBuilder = new RequestBuilder()
  .setMethod('get')
  .setData({firstName: 'Anna'})
  .setURL('/users')

console.log(a)
a.send()
