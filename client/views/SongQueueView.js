// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(){
    this.render();
    this.collection.on('add', this.renderQueue, this);
    // this.collection.on('add', this.render, this);

    this.collection.on('remove', this.renderRemove, this);

  }, 

  render: function(){

    this.$el.children().detach();

    this.$el.html('<th>queue</th>');
  },


  renderQueue: function(queueEntry){
    // this.$el.detach(queueEntryView.render());
    var queueEntryView = new SongQueueEntryView({model: queueEntry});
    this.$el.append(queueEntryView.render());
  },


  renderRemove: function() {
    // console.log('children[0]',this.$el.children[0]);
    // console.log('children.first()', this.$el.children.first());
    // console.log('this.$el', this);

    this.$el.find('tr:first').remove();
    // this.remove(this.at(0));

  }



});
