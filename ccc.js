#!/usr/bin/env node
var shell = require('shelljs');

var params = process.argv.slice(2);
params.map(function(item){
  var command = 'curl -X PUT -d \'{"domainfiles": ["' + item + '"], "domaindirs": []}\' http://cdn.sohucs.com/cdn/newpurge'
  // console.log(command);
  shell.exec(command);
});
