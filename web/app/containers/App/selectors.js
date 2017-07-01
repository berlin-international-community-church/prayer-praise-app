import { createSelector } from 'reselect';

const selectGlobalDomain = () => (state) => state.get('global');

const selectAuth0 = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.get('auth0')
);

const selectAccessToken = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.get('accessToken')
);

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectAuth0,
  makeSelectLocationState,
  selectAccessToken
};
