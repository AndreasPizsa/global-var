require('should');

describe('global-var', function() {
  describe('node', function() {
    it('returns `global`', function() {
      const globals = require('./index');
      globals.getGlobal().should.equal(global);
    });
  });
});
