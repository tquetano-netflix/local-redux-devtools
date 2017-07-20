#!/usr/bin/env node
const electron = require('electron');
const spawn = require('cross-spawn');

const { hostname, port } = require('../config');

const result = spawn.sync(
  electron,
  [ require.resolve('../app') ].concat([ `--hostname ${hostname}`, `--port ${port}` ]),
  { stdio: 'ignore' }
);

process.exit(result.status);
