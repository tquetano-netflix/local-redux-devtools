#!/usr/bin/env node
const remotedevServer = require('remotedev-server');
const open = require('open');

const { hostname, port } = require('../config');

const args = process.argv.slice(2);

const shouldOpen = args.indexOf('--open') || args.indexOf('-o');

remotedevServer({
  hostname,
  port
}).then(sc =>
  sc.on('ready', () =>
    shouldOpen ? open(`http://${hostname}:${port}`) : undefined
  )
);
