module.exports = {
  'Demo test NightwatchJS.org' : function (client) {
    client
      .url('http://nightwatchjs.org')
      .waitForElementVisible('body')
      .assert.elementsCount('#index-container ul.features li', 7)
      .end();
  }
};
