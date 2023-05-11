'use strict';
const flightIconSprite = require('@hashicorp/flight-icons/svg-sprite/svg-sprite-module');

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    let defaultOptions = {
      // automatically embed svg to index.html
      autoEmbed: true
    };

    let addonOptions = app.options['ember-flight-icons'];

    this._emberFlightIconsOptions = Object.assign({}, defaultOptions, addonOptions);
  },

  contentFor(type) {
    // notice: the "body-footer" is used in the normal app, while the "ember-testing-sprite-embed" is used
    // in the testing environment to inject the sprite in the #ember-testing "app root element" (ENV.APP.rootElement)
    // otherwise the @percy/ember package ignores everything else and the SVG sprite is not added to the DOM
    // see thread: https://hashicorp.slack.com/archives/C11JCBJTW/p1633978558343000
    // see: https://github.com/percy/percy-ember/blob/master/addon-test-support/%40percy/ember/index.js#L33
    if (this._emberFlightIconsOptions.autoEmbed && (type === 'body-footer' || type === 'ember-testing-sprite-embed')) {
      return flightIconSprite;
    }
  },
};
