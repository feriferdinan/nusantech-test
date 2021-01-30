const initialState = {
    token: null,
    profile: null,
  };
  
  const auth = (state = initialState,action) => {
    switch (action.type) {
      case 'SET_AUTH':
        return {
          ...state,
          token: action.payload,
        };
  
      case 'SET_USER_PROFILE':
        return {
          ...state,
          profile: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default auth;
  