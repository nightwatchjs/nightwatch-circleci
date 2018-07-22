const util = require('util');
const menuXpath = '//div[contains(@class, "hdtb-mitem")][contains(., %s)]';

module.exports = {
  elements: {
    results: {selector: '#ires'}
  },
  sections: {
    menu: {
      selector: '#hdtb-msb',
      commands: [{
        productIsSelected(product, callback) {
          const self = this;

          return this.getAttribute(product, 'class', function (result) {
            const isSelected = result.value.indexOf('hdtb-msel') > -1;

            callback.call(self, isSelected);
          });
        }
      }],

      elements: {
        web: {
          selector: util.format(menuXpath, 'Web'),
          locateStrategy: 'xpath'
        },

        video: {
          selector: util.format(menuXpath, 'Video'),
          locateStrategy: 'xpath'
        },

        images: {
          selector: util.format(menuXpath, 'Images'),
          locateStrategy: 'xpath'
        },

        shopping: {
          selector: util.format(menuXpath, 'Shopping'),
          locateStrategy: 'xpath'
        }
      }
    }
  }
};