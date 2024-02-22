export default null;

// ビルダーパターン
// オブジェクトの構築と、そのオブジェクトを実際に実装する方法を分離する
interface BuildableRequest {
  // data はオプション
  data?: object
  method: 'get' | 'post'
  url: string
}

class RequestBuilder2 {
  data?: object
  method?: 'get' | 'post'
  url?: string

  // Pick<T, K> すでに存在する T 型の中から K で選択した一部のプロパティのみを含んだ新たな型を構築する
  // BuildableRequest 型の中から data 型のみを含んだ新たな型を作る
  setData(data: object): this & Pick<BuildableRequest, 'data'> {
    // this に data を設定する。 data が元からセットされている場合は上書きする
    return Object.assign(this, {data})
  }

  setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
    return Object.assign(this, {method})
  }

  setURL(url: string): this & Pick<BuildableRequest, 'url'> {
    return Object.assign(this, {url})
  }

  build(this: BuildableRequest) {
    console.log('build.')
    return this
  }
}

new RequestBuilder2()
  .setData({firstName: 'Anna'})
  .setMethod('get')
  .setURL('/users')
  .build()

