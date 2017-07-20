import { composeWithDevTools as originalComposeWithDevTools } from 'remote-redux-devtools';

import * as config from './config';

const { hostname, port, securePort } = config;

function composeWithDevTools ({
  name,
  ...options
}) {
  return originalComposeWithDevTools({
    name,
    hostname,
    port: options.secure ? securePort : port,
    ...options
  });
}

export { composeWithDevTools, config };
export default composeWithDevTools;
