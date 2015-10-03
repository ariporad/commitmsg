/* (c) 2015 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
/* istanbul ignore next: this doesn't need to be tested */
if (!global._hasDoneSetup) {
  global._hasDoneSetup = true;

  if(!global.Bluebird) global.Bluebird = require('bluebird');
  global.Promise = global.Bluebird;

// This will throw an error if loaded twice.
// This will also use Bluebird promises.
  try {
    require('babel/polyfill');
  } catch (e) {
    // Babel throws an error if loaded more than once. We don't care.
  }

// This has a build in multiple call check
  require('app-module-path').addPath(__dirname);
}
