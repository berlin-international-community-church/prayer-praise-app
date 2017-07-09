import * as React from 'react';
import * as styles from './styles.css';

class Layout extends React.PureComponent<{children?: any}, {}> {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
        </div>
        <div className={styles.page}>
          <div className={styles.sidebar}>
          </div>
          <div className={styles.main}>
            { React.Children.toArray(this.props.children) }
          </div>
        </div>
        <div className={styles.footer}>
        </div>
      </div>
    );
  }

}

export default Layout;
