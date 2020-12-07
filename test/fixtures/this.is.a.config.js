// checks to make sure .config files have node
const hooks = require('async_hooks');

if (!hooks) {
  throw new Error('OMG');
}
