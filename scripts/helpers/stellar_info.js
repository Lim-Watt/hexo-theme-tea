'use strict';

hexo.extend.helper.register('tea_info', function(args){
  const repo = 'https://github.com/Lim-Watt/hexo-theme-tea';
  const wiki = 'https://Lim-Watt.com/wiki/tea/';
  const issues = repo + '/issues/';
  const { version } = require('../../package.json');
  const cfg = hexo.theme.config.tea;
  if (!args) {
    return repo;
  } else if (args == 'name') {
    return 'tea';
  } else if (args == 'version') {
    return version;
  } else if (args == 'issues') {
    return repo + '/issues/'
  } else if (args == 'tree') {
    return repo + '/tree/' + version;
  }
  return '';
});
