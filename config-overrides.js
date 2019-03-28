const { override, addLessLoader, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    'polished',
    process.env.NODE_ENV === 'production'
      ? 'emotion'
      : ['emotion', { sourceMap: true }],
    ['import', { libraryName: 'antd-mobile', style: true }, 'antd-mobile'],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ]
  ),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#dc901a', 'brand-primary': '#dc901a' },
  })
);
