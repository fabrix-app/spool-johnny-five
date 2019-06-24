'use strict'
/* global describe, it */
const assert = require('assert')
const _ = require('lodash')

describe('# Pin Board', () => {
  it('should exist', () => {
    assert(global.app.johnnyFive)
    assert.ok(global.app.boards['PinBoard'])
  })
  it('should queue a scrape', (done) => {
    done()
  })
})
