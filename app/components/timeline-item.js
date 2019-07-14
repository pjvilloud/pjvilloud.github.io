import Component from '@ember/component';

export default Component.extend({
  tagName:"li",
  right: false,
  classNameBindings: ["right:timeline-inverted"]
});
