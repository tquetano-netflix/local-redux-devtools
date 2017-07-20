#!/usr/bin/env node
const remotedevServer = require('remotedev-server');

const electron = require('electron');
const spawn = require('cross-spawn');

const { hostname, port } = require('../config');

const args = process.argv.slice(2);

const shouldOpen = args.indexOf('--open') || args.indexOf('-o');

function spawnDevToolsApp({ hostname, port }) {
  return spawn(
    electron,
    [ require.resolve('../app') ].concat([ `--hostname ${hostname}`, `--port ${port}` ]),
    { stdio: 'ignore' }
  );
}

remotedevServer({
  hostname,
  port
}).then(sc =>
  sc.on('ready', () =>
    shouldOpen ? spawnDevToolsApp({ hostname, port }) : undefined
  )
);
