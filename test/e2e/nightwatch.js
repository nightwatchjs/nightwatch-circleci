module.exports = {
  'Demo test NightwatchJS.org' (client) {
    const page = client.page['nightwatchjs.org'].home();

    page.api.openHomepage();

    client
      .assert.elementsCount('#index-container ul.features li', 7)
      .end();
  }
};
