import { createSelector } from 'reselect';

/**
 * Direct selector to the prayerForm state domain
 */
const selectPrayerFormDomain = () => (state) => state.get('prayerForm');

/**
 * Default selector used by PrayerForm
 */
const makeSelectPrayerForm = () => createSelector(
  selectPrayerFormDomain(),
  (substate) => substate.toJS()
);

/**
* Other specific selectors
*/
const makeSelectPrayerText = () => createSelector(
  selectPrayerFormDomain(),
  (substate) => substate.get('prayerText')
);

export {
  makeSelectPrayerText
};
