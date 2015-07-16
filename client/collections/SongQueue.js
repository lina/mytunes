// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function() {
      if(this.length === 1){  
        this.playFirst();
      }
    }); 

    this.on('ended', function() {
      this.remove(this.at(0));
      if(this.length) {
        this.playFirst();         
      }
    });

    this.on('dequeue',function() {
      this.remove(this.at(0));
    });

  },

  playFirst: function(){
    this.first().play();
  }

});