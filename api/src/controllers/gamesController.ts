import {getGames} from '../util/queries'
//@ts-ignore
export const queryGames = async (req, res) => {
  const data = await getGames()
  res.send({result: data})
}
