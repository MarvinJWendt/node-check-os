import test from 'ava'
import * as app from '../src/app'


test('Check getPlatform()', t => {
  t.is(app.getPlatform(), process.platform)
})