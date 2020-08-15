import { fromJS } from 'immutable';

const defaultConfiguration = {};

const environmentConfiguration = (environment: string) => {
  const defaultConf = fromJS(defaultConfiguration);

  if (environment === 'development') {
    return defaultConf.merge({
      baseURL: `https://ppa.berlin.church`,
      callbackURL : `http://${window.location.hostname}:3000/authCallback`
    }).toObject();
  }
  return defaultConf.merge({
    baseURL: 'https://prayersnpraises.online/api',
    callbackURL: 'https://prayersnpraises.online/authCallback'
  }).toObject();
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
