nodejs tracing
==============

A sample `nodejs` web server app, with distributed tracing configured
and instrumented logging with [winston](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/plugins/node/opentelemetry-instrumentation-winston)

The app serves http://localhost:8080/. Returns "hello world".

Setup
-----
```
npm install
```

Usage
-----

To start the app *without* instrumentation
```
node app.js
```

To start the app *with* instrumentation
```
node --require './tracing.js' app.js
```

Log Shipping
------------
To make the logged output ready to be consumed by log shippers, logged output should be in
JSON-line formatted. This requires:
* Removing `format` from `winston.transports.Console` in [logger.js](./logger.js).
* Replacing `ConsoleSpanExporter` in [tracing.js](./tracing.js).

References
----------
1. Sample `nodejs` app with distributed tracing [here](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/).
2. Using `winston` instrumented version [here](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/plugins/node/opentelemetry-instrumentation-winston).

