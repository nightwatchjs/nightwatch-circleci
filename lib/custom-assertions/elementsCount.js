var util = require('util');

exports.assertion = function(selector, expectedItemsNo, msg) {
  this.selector = selector;
  this.message = msg || util.format('Testing if there are %s elements found for selector <%s>', expectedItemsNo, selector);

  this.expected = expectedItemsNo;

  this.pass = function(value) {
    return value === expectedItemsNo;
  };

  this.value = function(result) {
    return result.value.length;
  };

  this.failure = function(result) {
    var failed = (result === false) ||
      // no such element
      result && (result.status === -1 || result.value === null);

    if (failed) {
      this.message += ' No elements were returned.';
    }
    return failed;
  };

  this.command = function(callback) {
    return this.api.elements(this.client.locateStrategy, this.selector, callback);
  };
};
