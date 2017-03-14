
import { fromJS } from 'immutable';
import prayerFormReducer from '../reducer';

describe('prayerFormReducer', () => {
  it('returns the initial state', () => {
    expect(prayerFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
