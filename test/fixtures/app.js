'use strict'

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    boards: {
      PinBoard: require('./PinBoard')
    }
  },
  config: {
    johnny_five: {

    },
    main: {
      spools: [
        require('../../dist').JohnnyFiveSpool
      ]
    }
  }
}


