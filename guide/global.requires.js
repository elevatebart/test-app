import VueObserveVisibility from 'vue3-observe-visibility';

export default (app) => {
  app.directive('observe-visibility', VueObserveVisibility)
};