// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    var ifPlaying = false;
    params.library.on('play', function(song){
      if(!ifPlaying){
        this.set('currentSong', song);
        ifPlaying = true;
      }
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    // params.library.on('dequeue', function(song){
    //   // console.log(song);
    //   // if(this.get('songQueue').length === 0){
    //     // ifPlaying = false;
    //     // this.set('currentSong', new SongModel());
    //   // }
    //   // console.log("length:", this.get('songQueue').length);
    // }, this);
    params.library.on('ended', function(song) {
      ifPlaying = false
    });
  }

});


  // describe('when a song ends', function() {
  //   it('removes the song from the queue', function() {
  //     var songQueue = new SongQueue([songData1, songData2]);
  //     song2 = songQueue.at(1);
  //     expect(songQueue.length).to.equal(2);
  //     songQueue.at(0).trigger('ended');
  //     expect(songQueue.length).to.equal(1);
  //     expect(songQueue.at(0)).to.equal(song2);
  //   });