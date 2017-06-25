import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectUserDomain = () => (state) => state.get('user');

const makeSelectUser = () => createSelector(
  selectUserDomain(),
  (substate) => substate.toJS()
);

export {
  selectUserDomain,
};
