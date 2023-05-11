import * as svgSprite from '@hashicorp/flight-icons/svg-sprite/svg-sprite-module';

export function initialize(/* application */) {
  window.document.body.insertAdjacentHTML('beforeend', svgSprite)
}

export default {
  initialize
};
