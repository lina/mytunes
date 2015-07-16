// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  events: {
   
  },
  template: _.template(['<div class="queueEntry">',
                       '<span><%- title%></span>' ,
                       '<span><%- artist%></span>',
                       '</div>'].join('')),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});


// sinon.spy(SongQueueView.prototype, 'render');
// view = new SongQueueView({collection: fakeSongs});
// view.collection.add({
//   artist: 'data',
//   url: '/test/testsong3.mp3',
//   title:'test song 3'
// });
// view.collection.pop();
// expect(view.render).to.have.been.called;