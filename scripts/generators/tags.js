/**
 * tags v1 | https://github.com/Lim-Watt/hexo-theme-tea/
 */

hexo.extend.generator.register('tags', function (locals) {
  if (locals.tags && locals.tags.length > 0) {
    return {
      path: hexo.config.tag_dir + '/index.html',
      layout: ['tags'],
      data: locals.posts
    }
  } else {
    return {}
  }
})
