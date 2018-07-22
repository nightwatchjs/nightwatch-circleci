module.exports = {
  url: 'https://google.com',
  commands: [{
    submit() {
      this.waitForElementVisible('@submitButton', 3000)
        .click('@submitButton')
        .api.pause(1000);

      return this;
    }
  }],

  elements: {
    searchBar: {selector: 'input[name=q]'},
    submitButton: {selector: '[name=btnK]'}
  }
};
