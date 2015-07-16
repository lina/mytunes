// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    this.set('playedCount', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
    this.set('playedCount', this.get('playedCount') + 1);
    
  },
  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },
  ended: function(){
    console.log("songmodel trigger");
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  }

});
