import {getUser} from '../util/queries'
import {pushUser} from '../util/posts'

//@ts-ignore
export const queryUser = async (req, res) => {
  const email = req.params.email
  const data = await getUser(email)
  res.send({result: data})
}
//@ts-ignore
export const postUser = async (req, res) => {
  const email = req.params.email
  const firstName = req.params.fname
  const lastName = req.params.lname
  const displayName = req.params.dname
  const server = req.params.server
  await pushUser(email, firstName, lastName, displayName, server)
  const data = await getUser(email)
  res.status(201).json({
    message: 'User was created successfully!',
    user: data,
  })
}
