import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json')

export default {
  entry: pkg.entry || 'index.js',
  exports: 'named',
  plugins: [
    babel(
      babelrc()
    )
  ],
  external: Object.keys(pkg.dependencies),
  targets: [
    {
      dest: pkg.main,
      format: 'cjs',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
}
