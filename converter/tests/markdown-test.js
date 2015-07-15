var utils = require('./utils.js');
var markdown = utils.markdown;
var assertion = utils.assertion;

var features_dir = __dirname + '/features/';
var testsuite = utils.getTestSuite(features_dir);

describe('parse() features testsuite', function () {
  'use strict';
  for (var i = 0; i < testsuite.length; ++i) {
    it(testsuite[i].name, assertion(testsuite[i], markdown));
  }
})
