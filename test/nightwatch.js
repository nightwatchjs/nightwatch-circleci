module.exports = {
  'Demo test NightwatchJS.org' : function (client) {
    client
      .url('http://nightwatchjs.org')
      .waitForElementVisible('body')
      .assert.elementsCount('#index-container ul.features li', 0)
      .end();
  }
};
