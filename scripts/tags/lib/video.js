/**
 * video.js v1.0 | https://github.com/Lim-Watt/hexo-theme-tea/
 * 格式与官方标签插件一致使用空格分隔，中括号内的是可选参数（中括号不需要写出来）
 *
 * {% video src %}
 *
 */

'use strict';

module.exports = ctx => function(args) {
  args = ctx.args.map(args, ['type', 'bilibili', 'ratio', 'width', 'autoplay'], ['src'])
  if (args.width == null) {
    args.width = '100%'
  }
  if (args.bilibili) {
    return `
    <div class="tag-plugin video" style="aspect-ratio:${args.ratio || 16/9};max-width:${args.width};">
    <iframe src="https://player.bilibili.com/player.html?bvid=${args.bilibili}&autoplay=${args.autoplay || 'false'}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
    </iframe>
    </div>
    `
  }
  return `
  <div class="tag-plugin video" style="max-width:${args.width};">
  <video controls preload>
  <source src="${args.src}" type="${args.type || 'video/mp4'}">Your browser does not support the video tag.
  </video>
  </div>
  `
}
