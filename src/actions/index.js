export const appError = message => ({
  type: 'APPLICATION_ERROR',
  message
});

export const followSuggestionsLoaded = userProfiles => ({
  type: 'FOLLOW_SUGGESTIONS_LOADED',
  userProfiles
});
