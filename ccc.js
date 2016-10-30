#!/usr/bin/env node
var request = require('request');

var params = process.argv.slice(2);
var target_url = 'http://cdn.sohucs.com/cdn/newpurge';

if(params.length === 0){
  console.log("缺少 url 参数");
  return;
}
var p = function(url){
  request.put({
    url: target_url,
    json: {
      domainfiles: [url],
      domaindirs: []
    }
  }, function(err, res, body){
    if(res.statusCode == 200 && body.purge_results[0].hasError == "false"){
      console.log("Success: " + url + " CDN 缓存清除成功");
    }else{
      console.log("ERROR: " + url + " CDN  缓存清除失败");
    }
  });
}

params.map(function(value){
  p(value);
});
