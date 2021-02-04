import {db} from './database'

export const getUser = async (email: string) => {
  return await db
    .query('SELECT * FROM users WHERE email = $1', email)
    .then(function(data) {
      return data
    })
    .catch(function(error) {
      console.log('ERROR:', error)
    })
}

export const getGames = async () => {
  return await db
    .query('SELECT * FROM games')
    .then(function(data) {
      console.log(data)
      return data
    })
    .catch(function(error) {
      console.log('ERROR:', error)
    })
}
