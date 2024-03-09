import Publisher from './publisher';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { on } from '@ember/object/evented';

export default Publisher.extend({
  name: attr('string'),
  biography: attr('string'),
  books: hasMany('book'),

  onDidLoad: on('didLoad', function() {
    this.set('loadedAt', new Date());
  })

});
