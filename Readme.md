# karma-htmlmin-preprocessor

> Preprocessor for running html through [html-minifier](https://github.com/kangax/html-minifier)

## Installation

Add `karma-htmlmin-preprocessor` as a devDependency to your `package.json` file.
```json
{
    "devDependencies": {
        "karma": "~0.10",
        "karma-htmlmin-preprocessor": "~0.1"
    }
}
```

Or you can install it from the commandline:
```bash
npm install karma-htmlmin-preprocessor --save-dev
```

## Configuration
The code below shows the sample configuration of the preprocessor.

See [html-minifier documentation](https://github.com/kangax/html-minifier) for all possible configuration options.
```js
// karma.conf.js
module.exports = function(config) {
    preprocessors: {
        '**/*.html': ['html-min']
    },

    htmlMinPreprocessor: {
        // options to pass through to html-minifier
        collapseWhitespace: true
        // html-min preprocessor does not perform any actions to this object
        // see https://github.com/kangax/html-minifier for all possible options
    }

    // Rest of karma config values
};
```

----

For more information on Karma, see the [homepage]

[homepage]: http://karma-runner.github.com
