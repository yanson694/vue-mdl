/* global describe it before $ app */
import utils from '../utils'

describe('Tabs', function () {
  let tabs = null
  before(function (done) {
    app.currentComponent = 'tabs'
    utils.nextTick()
    .then(function () {
      tabs = $('#tabs')
      done()
    })
  })

  it('exists and is hidden', function () {
    tabs.should.exist
    tabs.should.not.be.visible
  })
})
