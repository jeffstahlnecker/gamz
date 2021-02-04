import {db} from './database'

export const pushUser = async (
  email: string,
  fname: string,
  lname: string,
  dname: string,
  server: string,
) => {
  return await db
    .none(
      'INSERT INTO users(email, first_name, last_name, display_name, server_id) VALUES(${email}, ${fname}, ${lname}), ${dname}, ${server}',
      {
        name: {fname, lname},
        dname,
        server,
      },
    )
    .catch(function(error) {
      console.log('ERROR:', error)
    })
}
