import { composeWithDevTools as originalComposeWithDevTools } from 'remote-redux-devtools';

const { hostname, port } = require('./config');

function composeWithDevTools ({
  name,
  ...config
}) {
  return originalComposeWithDevTools({
    name,
    hostname,
    port,
    ...config
  });
}

export { composeWithDevTools };
export default composeWithDevTools;
