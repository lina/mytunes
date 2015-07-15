// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    console.log(this);
    this.set('currentSong', this.at(0));
  }

});