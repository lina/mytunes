// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      console.log("SongQueue file");
      if(this.length === 1){  
        this.playFirst();
      }
    }, this); 
    this.on('ended', function() {
      this.remove(this.at(0));
      // this.remove(song);
    })
    //start
    // this.$el.on('ended', function(e) {
    //   console.log("playerview end trigger");
    //   that.model.ended();
    // })

  },

  playFirst: function(){
    this.at(0).play();
  }

});

