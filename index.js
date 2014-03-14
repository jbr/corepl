var repl = require('repl')
,   vm = require('vm')
,   co = require('co')

module.exports.start = function(options) {
  options = options || {}
  options.eval = function(cmd, context, filename, callback) {
    context.__co = co
    context.__callback = callback
    vm.runInNewContext(
      "__co(function *(){ return "+cmd+" })(__callback)",
      context,
      'corepl'
    )
  }

  return repl.start(options)
}
