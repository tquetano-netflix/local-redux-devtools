#!/usr/bin/env node
const electron = require('electron');
const spawn = require('cross-spawn');

const { hostname, port, securePort } = require('../dist').config;

const args = process.argv.slice(2);

const shouldSecure = args.indexOf('--secure') !== -1 || args.indexOf('-s') !== -1;

const result = spawn.sync(
  electron,
  [ require.resolve('../app') ].concat([
    `--hostname ${hostname}`,
    `--port ${shouldSecure ? securePort : port}`
  ]),
  { stdio: 'ignore' }
);

process.exit(result.status);
