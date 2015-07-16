// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    
  }

  render: function() {
    return;
  }
});


// SongQueueView
// creates SongQueueEntryViews for each queued song & renders them â€£
// AssertionError: expected render to have been called at least once, but it was never calledsinon.spy(SongQueueEntryView.prototype, 'render');
// view = new SongQueueView({collection: fakeSongs});
// view.render();
// expect(SongQueueEntryView.prototype.render).to.have.been.called;