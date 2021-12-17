'use strict';

const { program } = requrie("commander");
const LogCore = require("log-core");

program.action(cmd => LogCore());
program.parse(process.argv);