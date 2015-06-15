var expect = require('expect.js'),
    htmlmin = require('../lib/html-min');

describe("Karma htmlmin preprocessor", function() {
    it('calls html-minifier', function(done) {
        var config = {
            collapseWhitespace: true
        };

        var preprocessor = htmlmin(config);

        var file = { originalPath: 'some.html' };

        var rawContent = '<div some-attr="value">\n     \n   </div>';
        var expectedOutput = '<div some-attr="value"></div>';

        preprocessor(rawContent, file, function(processedContent) {
            expect(processedContent).to.equal(expectedOutput);
            done();
        });
    });
});
