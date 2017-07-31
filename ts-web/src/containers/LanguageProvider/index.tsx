import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { translationMessages } from '../../i18n/';
import { StateType } from '../../constants/types';

interface IStateProps {
  locale: string;
}

const mapStateToProps = (immutableState: any): IStateProps => {
  return {
    locale: immutableState.get('app').get('locale')
  };
}

const mapDispatchToProps = (dispatch): {} => {
  return {};
}

@connect<IStateProps, {}>(mapStateToProps, mapDispatchToProps)
export class LanguageProvider extends React.Component<IStateProps, never> {

  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={translationMessages[this.props.locale]}
      >
        { React.Children.only(this.props.children) }
      </IntlProvider>
    );
  }

}
