/*
 规则由键值和配置数组组成，如：'name: [0, 'always', 72]'，数组中第一位为 level（等级），可选 0, 1, 2，0 为 disable（禁用），1 为 warning（警告），2 为 error（错误），第二位为该规则是否被应用，可选 always | never， 第三位为该规则允许值。
*/
module.exports = {
  // 继承默认配置
  extends: ["@commitlint/config-conventional"],
  // 自定义规则
  rules: {
    'type-enum': [2, 'always', [
      'build',
      'upd',
      'feat',
      'fix',
      'refactor',
      'docs',
      'chore',
      'style',
      'revert',
    ]],
    'header-max-length': [0, 'always', 72]
  }
};