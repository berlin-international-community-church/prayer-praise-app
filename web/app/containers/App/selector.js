import { createSelector } from 'reselect';

const selectGlobalDomain = () => (state) => state.get('global');

const selectAuth0 = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.get('auth0')
);

export {
  selectAuth0
};
