import {expect, server, BASE_URL} from './setup'

describe('Server test', () => {
  it('gets base url', done => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err: any, res: {status: any; body: {message: any}}) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal(
          'Environment variable is coming across.',
        )
        done()
      })
  })
})
