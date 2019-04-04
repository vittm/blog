const initPopupState = {
    isShowHideen : true
}

export const Popup = (state = initPopupState, action) => {
    switch(action.type) {
      case 'IS_SHOW_HIDDEN':
        return {
          ...state,
          isShowHideen: !state.isShowHideen,
        };
      default:
        return state;
    }
  };
  