const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    function() {
      const compiler = this

      compiler.plugin('compilation', function(compilation, params) {
        const {normalModuleFactory, contextModuleFactory} = params

        normalModuleFactory.plugin('parser', (parser, parserOptions) => {
          parser.plugin('import-call', (expression) => {
            debugger
          })
        })
      })
    }
  ]
}