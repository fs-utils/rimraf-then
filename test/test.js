
var fs = require('fs')
var path = require('path')
var assert = require('assert')

var rimraf = require('..')

var build = path.resolve('build')
try {
  fs.rmdirSync(build)
} catch (err) {}
fs.mkdirSync(build)

describe('mkdirp().then()', function () {
  it('should work', function () {
    return rimraf(build).then(function () {
      assert(!fs.existsSync(build))
    })
  })
})
