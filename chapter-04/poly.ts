export default null;

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

console.log(filter([1, 2, 3, 4], _ => _ < 3))

let names = [
  {firstName: 'beth'},
  {firstName: 'caitlyn'},
  {firstName: 'xin'}
]

let result = filter(
  names,
  _ => _.firstName.startsWith('b')
)

console.log(result[0].firstName)

// 通常の TreeNode
type TreeNode = {
  value: string
}

// 子ノードを持たない TreeNode である LeafNode
type LeafNode = TreeNode & {
  isLeaf: true
}

// 子ノードを持つ TreeNode である InnerNode
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}

// TreeNode のサブタイプを取り、それと同じサブタイプを返す
function mapNode<T extends TreeNode>( // 一つのジェネリック型パラメータ T を定義する関数。 T は TreeNode という上限を持ち、TreeNode か TreeNode のサブタイプのどちらか
  node: T,                            // 型が T の node が第一引数
  f: (value: string) => string
): T {                                // 型が T の値を返す
  return {
    ...node,
    value: f(node.value)
  }
}

let a1 = mapNode(a, _ => _.toUpperCase()) // TreeNode
let b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
let c1 = mapNode(c, _ => _.toUpperCase()) // InnerNode


type HasSides = {numberOfSides: number}
type SidesHaveLength = {sideLength: number}

function logPerimeter<
  Shape extends HasSides & SidesHaveLength
>(s: Shape): Shape {
    console.log(s.numberOfSides * s.sideLength)
    return s
}

type Square = HasSides & SidesHaveLength
let square: Square = {numberOfSides: 4, sideLength: 3}
logPerimeter(square)




