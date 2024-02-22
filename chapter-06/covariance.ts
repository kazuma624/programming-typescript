export default null;

// サーバーから取得した既存のユーザー
type ExistingUser = {
  id: number
  name: string
}

// サーバーにまだ保存されていない新規のユーザー
type NewUser = {
  name: string
}

function deleteUser(user: {id?: number, name: string}) {
  delete user.id
}

let exitingUser: ExistingUser = {
  id: 123456,
  name: 'Ima User'
}

deleteUser(exitingUser)

type LegacyUser = {
  id?: number | string
  name: string
}

let legacyUser: LegacyUser = {
  id: '793331',
  name: 'Xin Yang'
}

deleteUser(legacyUser) // Error
