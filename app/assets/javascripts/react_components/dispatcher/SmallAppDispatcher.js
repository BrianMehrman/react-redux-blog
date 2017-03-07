// ./dispatcher/SmappAppDispatcher.js
const SmallConstants = require('../constants/SmallConstants');
const assign = require('object-assign');
var Dispatcher = require('flux').Dispatcher;

const PayloadSources = SmallConstants.PayloadSources;

const SmallAppDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },
  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = SmallAppDispatcher;
