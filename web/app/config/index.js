import { fromJS } from 'immutable';

const defaultConfiguration = {};

const environmentConfiguration = (environment) => {
  const defaultConf = fromJS(defaultConfiguration);

  if (environment === 'development'){
    return defaultConf.merge({
      baseURL: 'http://' + window.location.hostname + ':3001',
    }).toObject();
  }
}

const Config = {
  env: environmentConfiguration(process.env.NODE_ENV)
}

export default Config;
