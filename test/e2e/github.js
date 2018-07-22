module.exports = {
  tags: ['git'],
  'Demo test GitHub' : function (client) {
    client
      .url('https://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .getTitle(function(result) {
        client.assert.equal(result.indexOf('GitHub - nightwatchjs/nightwatch'), 0, 'Page title starts with nightwatch')
      })
      .assert.visible('.container h1 strong a')
      .assert.containsText('.container h1 strong a', 'nightwatch', 'Checking project title is set to nightwatch');
  },

  after : function(client) {
    client.end();
  }
};
