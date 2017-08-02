import { fromJS } from 'immutable';

const defaultConfiguration = {};

const environmentConfiguration = (environment: string) => {
  const defaultConf = fromJS(defaultConfiguration);

  if (environment === 'development') {
    return defaultConf.merge({
      baseURL: 'http://' + window.location.hostname + ':3001'
    }).toObject();
  }
  return defaultConf.merge({
    baseURL: 'http://prayersnpraises.online/api'
  }).toObject();
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
