import { createSelector } from 'reselect';

const selectGlobalDomain = () => (state) => state.get('global');

const selectAuth0 = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.get('auth0')
);

const selectAccessToken = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.get('accessToken') || localStorage.getItem('token')
);

export {
  selectAuth0,
  selectAccessToken
};
