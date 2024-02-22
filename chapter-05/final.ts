export default null;

class MessageQueue {
  // 直接インスタンス化することを防ぐ
  private constructor(private messages: string[]) {}
  // メソッド呼び出しは可能にしておく
  static create(messages: string[]) {
    return new MessageQueue(messages)
  }
}

// constructor が pricate として指定されていると、
// そのクラスを拡張したり、 new したりすることはできない
class BadQueue extends MessageQueue {}

MessageQueue.create([])

