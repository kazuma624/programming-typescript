export default null

// 文字列リテラルの合併型を作って、CSS の単位が切り取る値を表現
type Unit = 'cm' | 'px' | '%'

// 単位を列挙
let units: Unit[] = ['cm', 'px', '%']

// 各単位をチェックし、一致するものがなければ null を返す
function parseUnit(value: string): Unit | null {
  for (let i = 0; i < units.length; i++) {
    if (value.endsWith(units[i])) {
      return units[i]
    }
  }
  return null
}

let u = parseUnit('cm')
console.log(u)

type Width = {
  unit: Unit,
  value: number
}

function parseWidth(width: number | string | undefined): Width | null {
  // width が null または undefined であれば、すぐに return する
  if (width == null) {
    return null
  }
  // 以降は number | string に絞り込まれる

  // width が number であれば、ピクセルをデフォルトの単位とする
  if (typeof width === 'number') {
    return {unit: 'px', value: width}
  }

  // width から単位を解析する
  let unit = parseUnit(width)
  if (unit) {
    return {unit, value: parseFloat(width)}
  }

  // どれでもなければ、 null を返す
  return null
}
