import * as React from 'react';

import { ShareStatus } from '../../constants/enums';
import * as styles from './styles.css';

interface IProps {
  sharedStatus: ShareStatus;
  handleChangeShareStatus(status: ShareStatus): void;
}

class SelectBar extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.selectbar}>
        <div
          className={this.props.sharedStatus === ShareStatus.SHARE_WITH_NOONE ?
            styles.selected : styles.unselected}
          onClick={() => this.props.handleChangeShareStatus(ShareStatus.SHARE_WITH_NOONE)}>
          Share with no one
        </div>
        <div
          className={this.props.sharedStatus === ShareStatus.SHARE_WITH_PRAYER_TEAM ?
            styles.selected : styles.unselected}
          onClick={() => this.props.handleChangeShareStatus(ShareStatus.SHARE_WITH_PRAYER_TEAM)}>
          Share with prayer team
        </div>
        <div
          className={this.props.sharedStatus === ShareStatus.SHARE_WITH_EVERYONE ?
            styles.selected : styles.unselected}
          onClick={() => this.props.handleChangeShareStatus(ShareStatus.SHARE_WITH_EVERYONE)}>
          Share with everyone
        </div>
      </div>
    );
  }

}

export default SelectBar;
