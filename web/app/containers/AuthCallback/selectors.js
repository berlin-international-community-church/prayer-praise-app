import { createSelector } from 'reselect';

const selectGlobalDomain = () => (state) => state.get('global');

const selectAuth0 = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.get('auth0')
);

const selectLoggedIn = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.get('accessToken') && substate.get('idToken')
);

export {
  selectAuth0,
  selectLoggedIn
};
