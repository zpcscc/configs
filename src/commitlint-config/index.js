// https://github.com/conventional-changelog/commitlint/tree/master/docs
module.exports = {
  parserPreset: {
    parserOpts: { headerPattern: /^(.*)(?:\((.*)\))?!?: (.*)$/ },
  },
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '✨feat',
        '🐛fix',
        '🔥update',
        '📚docs',
        '💎style',
        '📦refactor',
        '🚀perf',
        '🚨test',
        '🛠build',
        '⚙️ ci',
        '🗑revert',
      ],
    ],
  },
  prompt: {
    message: {
      skip: '该字段可以通过回车跳过',
      max: '最大字符数',
      min: '最小字符数',
      emptyWarning: '该字段不能为空',
      upperLimitWarning: '超出字符数限制',
      lowerLimitWarning: '字符小于下限',
    },
    questions: {
      type: {
        description: '选择当前 commit 的类型',
        enum: {
          '✨feat': {
            description: '新功能',
            title: '✨Features',
            emoji: '✨',
          },
          '🔥update': {
            description: '功能更新',
            title: '🔥Update',
            emoji: '🔥',
          },
          '🐛fix': {
            description: '修复bug',
            title: '🐛Bug Fixes',
            emoji: '🐛',
          },
          '📚docs': {
            description: '文档更新',
            title: '📚Documentation',
            emoji: '📚',
          },
          '💎style': {
            description: '代码风格的更改(空格，逗号，缺少分号等)',
            title: '💎Styles',
            emoji: '💎',
          },
          '📦refactor': {
            description: '代码重构(即不修复bug也不增加新功能)',
            title: '📦Code Refactoring',
            emoji: '📦',
          },
          '🚀perf': {
            description: '性能提升',
            title: '🚀Performance Improvements',
            emoji: '🚀',
          },
          '🚨test': {
            description: '添加测试文件或者更改测试文件',
            title: '🚨Tests',
            emoji: '🚨',
          },
          '🛠build': {
            description: '构建系统或依赖更新，如webpack、rollup更改或者npm',
            title: '🛠Builds',
            emoji: '🛠',
          },
          '⚙️ ci': {
            description: 'ci配置的更改，如 travis、github-ci',
            title: '⚙️Continuous Integrations',
            emoji: '⚙️',
          },
          '🗑revert': {
            description: '恢复以前的提交（如git revert）',
            title: '🗑Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '变动访问，模块或者文件名',
      },
      subject: {
        description: '写一个简短的描述',
      },
      body: {
        description: '提供更改的详细说明',
      },
      isBreaking: {
        description: '是否有破坏性更新?',
      },
      breakingBody: {
        description: '破坏性变更的详细描述',
      },
      breaking: {
        description: '破坏性变更的详细描述简短描述',
      },
      isIssueAffected: {
        description: '此更改是否影响任何已知问题?',
      },
      issuesBody: {
        description: '如果问题已解决，则提交需要一个主体。请输入提交本身的详细描述',
      },
      issues: {
        description: '添加问题参考 (e.g. "fix #123", "re #123".)',
      },
    },
  },
};
