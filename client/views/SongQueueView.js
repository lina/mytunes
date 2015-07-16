// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(){
    this.render();
    this.collection.on('add', this.renderQueue, this);
    this.collection.on('remove', this.renderRemove, this);
  }, 

  render: function(){
    this.$el.children().detach();
    this.collection.each(this.renderQueue, this);
    this.$el.html('<th>queue</th>');
  },

  renderQueue: function(queueEntry){
    var queueEntryView = new SongQueueEntryView({model: queueEntry});
    this.$el.append(queueEntryView.render());
  },

  renderRemove: function() {
    this.$el.find('tr:first').remove();
  }

});
