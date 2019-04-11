const initPopupState = {
    isShowHidden : false
}

export const Popup = (state = initPopupState, action) => {
    switch(action.type) {
      case 'IS_SHOW_HIDDEN':
        return {
          ...state,
          isShowHidden: !state.isShowHidden,
        };
      default:
        return state;
    }
};
  