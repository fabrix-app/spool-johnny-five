/* eslint no-console: [0] */
'use strict'
import joi from 'joi'

import { johnnyFiveConfig } from './schemas'

export const Validator = {

  // Validate johnny-five Config
  validatejohnnyFiveConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, johnnyFiveConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.johnny_five: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
