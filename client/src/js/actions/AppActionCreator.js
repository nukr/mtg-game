const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let AppActionCreators = {

  load(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DATA_LOAD,
      items: data
    })
  },

  review(card){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REVIEW,
      items: card
    })
  },

  cast(card){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CAST,
      items: card
    })
  },

  saveToStore(data){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE,
      items: data
    })
  }

};

module.exports = AppActionCreators;
