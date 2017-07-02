import { createSelector } from 'reselect';

const selectPrayerFormDomain = () => (state) => state.get('prayerForm');

const selectMessageType = () => createSelector(
  selectPrayerFormDomain(),
  (substate) => substate.get('messageType')
);

const selectMessageText = () => createSelector(
  selectPrayerFormDomain(),
  (substate) => substate.get('messageText')
);

const selectSharingStatus = () => createSelector(
  selectPrayerFormDomain(),
  (substate) => substate.get('sharedWithChurch')
);

export {
  selectMessageType,
  selectMessageText,
  selectSharingStatus
};
