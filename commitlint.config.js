/*
 * @Description:
 * @Author: wsy
 * @Date: 2021-12-17 16:03:11
 * @LastEditTime: 2021-12-20 19:47:59
 * @LastEditors: wsy
 */
module.exports = {
  // 继承的规则
  extends: ['gitmoji'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        ':sparkles:', // 新功能 feature
        ':bug:', // 修复 bug
        ':memo:', // 文档注释
        ':lipstick:', // 代码格式(不影响代码运行的变动)
        ':recycle:', // 重构(既不增加新功能，也不是修复bug)
        ':zap:', // 性能优化
        ':white_check_mark:', // 增加测试
        ':wrench:', // 构建过程或辅助工具的变动
        ':rewind:' // 回退
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
