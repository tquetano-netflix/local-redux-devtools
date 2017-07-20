#!/usr/bin/env node
const remotedevServer = require('remotedev-server');

const electron = require('electron');
const spawn = require('cross-spawn');

const { hostname, port, securePort } = require('../dist').config;

const args = process.argv.slice(2);

const shouldOpen = args.indexOf('--open') !== -1 || args.indexOf('-o') !== -1;
const shouldSecure = args.indexOf('--secure') !== -1 || args.indexOf('-s') !== -1;

function spawnDevToolsApp({ hostname, port }) {
  return spawn(
    electron,
    [ require.resolve('../app') ].concat([
      `--hostname ${hostname}`,
      `--port ${port}`
    ]),
    { stdio: 'ignore' }
  );
}

const p = shouldSecure ? securePort : port

remotedevServer({
  hostname,
  port: p
}).then(sc =>
  sc.on('ready', () =>
    shouldOpen ? spawnDevToolsApp({ hostname, port: p }) : undefined
  )
);
