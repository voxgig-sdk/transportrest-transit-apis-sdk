
import { Context } from './Context'


class TransportrestTransitApisError extends Error {

  isTransportrestTransitApisError = true

  sdk = 'TransportrestTransitApis'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TransportrestTransitApisError
}

