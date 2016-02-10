import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('show', {path: '/show/:id'});
  this.route('nested', function() {
    this.route('show-not-found-as-route-name', {path: 'show-not-found-as-route-name/:id'});
  });

  this.route('show-transition-to-not-found-as-route-name', {path: 'show-transition-to-not-found-as-route-name/:id'});
  this.route('show-transition-to-not-found-as-url', {path: 'show-transition-to-not-found-as-url/:id'});
  this.route('not-found', {path: '/*path'});
});

export default Router;
