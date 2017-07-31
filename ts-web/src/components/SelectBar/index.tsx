import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { ShareStatus } from '../../constants/enums';
import * as styles from './styles.css';

interface IProps {
  loggedIn: boolean;
  sharedStatus?: ShareStatus;
  handleChangeShareStatus(status: ShareStatus): void;
}

class SelectBar extends React.PureComponent<IProps> {

  determineClass() {
    if (!this.props.loggedIn) {
      return styles.hidden;
    }
    return this.props.sharedStatus === ShareStatus.SHARED_WITH_NOONE ?
      styles.selected : styles.unselected;
  }

  render() {
    return (
      <div className={styles.selectbar}>
        <div
          className={this.determineClass()}
          onClick={() => this.props.handleChangeShareStatus(ShareStatus.SHARED_WITH_NOONE)}>
          <FormattedMessage id="share.options.noone" />
        </div>
        <div
          className={this.props.sharedStatus === ShareStatus.SHARED_WITH_PRAYER_TEAM ?
            styles.selected : styles.unselected}
          onClick={() => this.props.handleChangeShareStatus(ShareStatus.SHARED_WITH_PRAYER_TEAM)}>
          <FormattedMessage id="share.options.prayerTeam" />
        </div>
        <div
          className={this.props.sharedStatus === ShareStatus.SHARED_WITH_EVERYONE ?
            styles.selected : styles.unselected}
          onClick={() => this.props.handleChangeShareStatus(ShareStatus.SHARED_WITH_EVERYONE)}>
          <FormattedMessage id="share.options.everyone" />
        </div>
      </div>
    );
  }

}

export default SelectBar;
