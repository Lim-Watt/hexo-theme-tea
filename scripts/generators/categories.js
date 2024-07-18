/**
 * categories v1 | https://github.com/Lim-Watt/hexo-theme-tea/
 */

hexo.extend.generator.register('categories', function (locals) {
  if (locals.categories && locals.categories.length > 0) {
    return {
      path: hexo.config.category_dir + '/index.html',
      layout: ['categories'],
      data: locals.posts
    }
  } else {
    return {}
  }
})
