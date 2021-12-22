/*
 * @Description:
 * @Author: wsy
 * @Date: 2021-12-17 15:23:59
 * @LastEditTime: 2021-12-20 19:48:43
 * @LastEditors: wsy
 */
module.exports = {
  // 可选类型
  types: [
    { value: ':sparkles: feat', name: '✨ feat:     新功能' },
    { value: ':bug: fix', name: '🐛 fix:      修复' },
    { value: ':memo: docs', name: '📝 docs:     文档变更' },
    { value: ':lipstick: style', name: '💄 style:    代码格式(不影响代码运行的变动)' },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: ':zap: perf', name: '⚡️ perf:     性能优化' },
    { value: ':white_check_mark: test', name: '✅ test:     增加测试' },
    { value: ':wrench: chore', name: '🔧 chore:    构建过程或辅助工具的变动' },
    { value: ':rewind: revert', name: '⏪️ revert:   回退' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交吗?'
  },
  // allowCustomScopes: true,
  // 当提交类型为feat、fix时才有破坏性修改选项
  allowBreakingChanges: ['feat', 'fix'],
  // subject文字长度默认是72
  subjectLimit: 100
}
