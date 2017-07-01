import { createSelector } from 'reselect';

const selectUserDomain = () => (state) => state.get('user');

const selectJwtToken = () => createSelector(
  selectUserDomain(),
  (substate) => substate.get('jwtToken')
);

const selectUserName = () => createSelector(
  selectUserDomain(),
  (substate) => substate.get('username')
);

const selectProfilePic = () => createSelector(
  selectUserDomain(),
  (substate) => substate.get('profilePic')
);

export {
  selectJwtToken,
  selectUserName,
  selectProfilePic
};
