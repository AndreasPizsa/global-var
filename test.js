require('should');

describe('global-var', function() {
  describe('node', function() {
    it('returns `global`', function() {
      var globals = require('./index');
      globals.getGlobal().should.equal(global);
    });
  });
});
