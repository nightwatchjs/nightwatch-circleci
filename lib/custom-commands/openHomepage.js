module.exports = {
  command() {
    this.url('http://nightwatchjs.org')
      .waitForElementVisible('section#index-container');

    return this;
  }
};