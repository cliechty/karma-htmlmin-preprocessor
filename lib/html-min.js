var minify = require('html-minifier').minify;

function createHtmlMinProcessor(config) {
    return function process(content, file, done) {
        var result = minify(content, config);

        done(result);
    };
}

createHtmlMinProcessor.$inject = ['config.htmlMinPreprocessor'];

module.exports = createHtmlMinProcessor;
