// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id="audioplayer" controls autoplay />',

  initialize: function() {

    var that = this;
    this.model.on('play', function(e) {

      // this.setSong(song);
      // console.log(e.changed);

    }, this);

    this.$el.on('ended', function(e) {
      that.model.dequeue();
      that.model.ended();
    })
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
