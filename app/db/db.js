import Database from 'nedb'
import path from 'path'

let db = new Database({filename: path.resolve('./store.db'), autoload: true})

export default db
