/**
 * Created by online on 6/03/15.
 */
// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['uitest/*.js'],
    capabilities: {
        browserName: 'firefox'
    },
     onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
   },
   jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    //timeout_in_millis
    print: function() {}
}

}