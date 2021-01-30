const initialState = {
    isFirst: true,
  };
  
const apps = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SPLASH':
        return {
          ...state,
          isFirst: false,
        };
  
      default:
        return state;
    }
  };
  
  export default apps;
  