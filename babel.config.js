module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-export-default-from'
  ],
  presets: ['@babel/react', '@babel/env'],
  env: {
    cjs: {
      plugins: ['@babel/transform-runtime', 'transform-dynamic-import'],
      presets: [['@babel/env']]
    },
    esm: {
      plugins: ['@babel/transform-runtime'],
      presets: [
        [
          '@babel/env',
          {
            modules: false
          }
        ]
      ]
    },
    test: {
      presets: [['@babel/env', { targets: { node: true } }]],
      // There is no @babel/ scoped transform for this plugin
      plugins: ['transform-dynamic-import']
    }
  }
};
