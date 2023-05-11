/* eslint-disable prettier/prettier */
/* global Prism */
// const flightIconSprite = require('node_modules/@hashicorp/flight-icons/svg-sprite/svg-sprite-module');
import * as svgSprite from '@hashicorp/flight-icons/svg-sprite/svg-sprite-module';

export function initialize(/* application */) {
  // Overriding `unhashHTMLSpans` subparser to overcome the 10 levels of nesting limit
  console.log('initialize here')
  window.document.body.insertAdjacentHTML('beforeend', svgSprite)
}

export default {
  initialize
};
