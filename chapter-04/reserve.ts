export default null;

type Reservation = unknown

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination != undefined
  ) {
    // 宿泊旅行を予約する
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === 'string'
  ) {
    // 日帰り旅行を予約する
  } else if (typeof fromOrDestination === 'string') {
    // すぐ出発する場合の処理
  }
}