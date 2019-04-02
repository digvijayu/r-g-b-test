import { combineReducers } from 'redux';

export const initialAppState = {
  error: {
    message: ''
  },
  serverUrl: window.location.origin,
  isLoading: true,
  followSuggestions: []
};

export const appReducer = (
  state = initialAppState,
  action = { type: 'NO_TYPE' }
) => {
  switch (action.type) {
    case 'APPLICATION_ERROR':
      return {
        ...state,
        error: { message: action.message }
      };
    case 'FOLLOW_SUGGESTIONS_LOADED':
      return {
        ...state,
        isLoading: false,
        followSuggestions: action.userProfiles
      };
    case 'FOLLOW_PROFILE':
      return {
        ...state,
        followSuggestions: state.followSuggestions.filter(
          profile => profile.id !== action.profile.id
        )
      };
    default:
      return state;
  }
};

export default combineReducers({
  appReducer
});
