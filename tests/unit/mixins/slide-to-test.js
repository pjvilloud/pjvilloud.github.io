import Ember from 'ember';
import SlideToMixin from '../../../mixins/slide-to';
import { module, test } from 'qunit';

module('Unit | Mixin | slide to');

// Replace this with your real tests.
test('it works', function(assert) {
  let SlideToObject = Ember.Object.extend(SlideToMixin);
  let subject = SlideToObject.create();
  assert.ok(subject);
});
