import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { StateType } from '../../constants/types';

interface IStateProps {
  // children: Element;
  locale: string;
  // messages: any;
}

// interface IDispatchProps {
// }

type IAppProps = IStateProps; // & IDispatchProps;

function mapStateToProps(immutableState: any): IStateProps {
  const state: StateType = immutableState.toJS();
  return {
    locale: state.app.locale
  };
}

function mapDispatchToProps(dispatch): {} {
  return {};
}

@connect<IStateProps, {}>(mapStateToProps, mapDispatchToProps)
export class LanguageProvider extends React.Component<IAppProps, never> {

  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        // messages={this.props.messages[this.props.locale]}
      >
        { React.Children.only(this.props.children) }
      </IntlProvider>
    );
  }

}
