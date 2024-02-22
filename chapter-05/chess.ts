export default null;

// チェスのゲームを表す
class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      // キング
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      // クイーン
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      // ビショップ
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),

      // ナイト
      new Knight('White', 'B', 1),
      new Knight('White', 'G', 1),
      new Knight('Black', 'B', 8),
      new Knight('Black', 'G', 8),

      // ルーク
      new Rook('White', 'A', 1),
      new Rook('White', 'H', 1),
      new Rook('Black', 'A', 8),
      new Rook('Black', 'H', 8),

      // ポーン
      new Pawn('White', 'A', 1),
      new Pawn('White', 'B', 1),
      new Pawn('White', 'C', 1),
      new Pawn('White', 'D', 1),
      new Pawn('White', 'E', 1),
      new Pawn('White', 'F', 1),
      new Pawn('White', 'G', 1),
      new Pawn('White', 'H', 1),
      new Pawn('Black', 'A', 8),
      new Pawn('Black', 'B', 8),
      new Pawn('Black', 'C', 8),
      new Pawn('Black', 'D', 8),
      new Pawn('Black', 'E', 8),
      new Pawn('Black', 'F', 8),
      new Pawn('Black', 'G', 8),
      new Pawn('Black', 'H', 8),
    ]
  }
}

// 列挙型
type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// 駒の位置（座標）
class Position {
  constructor(
    private file: File,
    private rank: Rank
  ) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

// チェスの駒
abstract class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }
  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): boolean
}

// キング
class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

// クイーン
class Queen extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

// ビショップ
class Bishop extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 8 && distance.file < 8
  }
}

// ナイト
class Knight extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 3 && distance.file < 3
  }
}

// ルーク
class Rook extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 8 && distance.file < 8
  }
}

// ポーン
class Pawn extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    // 最初だけ2つ動けるようにする
    return distance.rank < 2
  }
}



