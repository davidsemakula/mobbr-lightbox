// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'app/components/jquery/dist/jquery.min.js',
            'app/components/angular/angular.js',
            'app/components/angular-mocks/angular-mocks.js',
            'app/components/angular-resource/angular-resource.js',
            'app/components/angular-route/angular-route.js',
            'app/components/angular-bootstrap/ui-bootstrap.js',
            'app/components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/components/ngstorage/ngStorage.js',
            'app/components/mobbr-api-angular/src/*.js',
            'app/components/mobbr-api-angular/src/api/*.js',
            'app/components/mobbr-api-angular/src/msg/mobbr-msg.js',
            'app/components/mobbr-api-angular/src/msg/*.js',
            'app/components/mobbr-api-angular/src/session/mobbr-session.js',
            'app/components/mobbr-api-angular/src/session/*.js',
            'app/scripts/**/*.js',
            'app/scripts/**/**/*.js',
            'app/scripts/**/**/**/*.js',
            'test/unit/**/**/*.js'
        ],

        plugins: [

            'karma-jasmine',

            'karma-junit-reporter',

            'karma-coverage',

            'karma-chrome-launcher',

            'karma-phantomjs-launcher'

        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8090,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Reporters
        // - dots
        // - progress
        // - junit
        // - growl
        // - coverage
        reporters: ['progress', 'junit', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/scripts/*.js': 'coverage',
            'app/scripts/**/*.js': 'coverage'
        },

        coverageReporter: {
            type: 'cobertura',
            dir: 'reports/unit/',
            file: 'coverage.xml'
        },

        junitReporter: {

            outputFile: 'reports/unit/test-results.xml',

            suite: 'unit'

        },

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
