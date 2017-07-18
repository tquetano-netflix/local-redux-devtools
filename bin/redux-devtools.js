#!/usr/bin/env node
const open = require('open');
const { hostname, port } = require('../config');

const reduxDevtoolsUrl = `http://${hostname}:${port}`;

open(reduxDevtoolsUrl);
