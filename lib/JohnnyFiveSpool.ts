import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import { Validator } from './validator'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class JohnnyFiveSpool extends ExtensionSpool {
  public johnnyFive: {[key: string]: any} = {}

  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
      johnnyFive: {
        get: () => {
          return this.johnnyFive
        },
        set: (newInstances) => {
          throw new Error('johnny-five can not be set through FabrixApp, check spool-johnny-five instead')
        },
        enumerable: true,
        configurable: true
      }
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    // const requiredSpools = [ 'router' ]
    // const spools = Object.keys(this.app.spools)
    //
    // if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
    //   return Promise.reject(new Error(`spool-johnny-five requires spools: ${ requiredSpools.join(', ') }!`))
    // }

    if (!this.app.config.get('johnny_five')) {
      return Promise.reject(new Error('No configuration found at config.johnny-five!'))
    }

    return Promise.all([
      Validator.validatejohnnyFiveConfig(this.app.config.get('johnny_five'))
    ])
      .catch(err => {
        return Promise.reject(err)
      })
  }

  /**
   * Configure
   */
  configure() {
    // Object.defineProperties(this.johnnyFive, johnnyFive.configure(this.app))
    return
  }

  /**
   * create caching stores
   */
  async initialize() {
    // return johnnyFive.init(this.app)
  }

  /**
   * unload caching stores
   */
  async unload() {
    // return johnnyFive.unload(this.app)
  }

  async sanity() {
    //
  }
}
