module.exports = {
    runtimeCompiler: true
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/'
}