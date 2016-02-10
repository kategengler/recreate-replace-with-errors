import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.reject();
  },
  actions: {
    error() {
      this.replaceWith('not-found');
    }
  }
});
