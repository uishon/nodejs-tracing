nodejs tracing
==============

A sample `nodejs` web server app, with distributed tracing configured
and instrumented logging with [winston](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/plugins/node/opentelemetry-instrumentation-winston)

The app serves http://localhost:8080/. Returns "hello world".

>_This app can also serve as a backend for a [this]() python app, to form a richer distributed tracing example.

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
JSON-line formatted. This requires removing `format` from `winston.transports.Console` in [logger.js](./logger.js).

Exporting Traces
----------------
To ship traces a cloud service, `ConsoleSpanExporter` in [tracing.js](./tracing.js) should be replaced
with either an exporter to a local agent (e.g., Open Teletry agent) or an exporter that connects to the target cloud service
directly.

References
----------
1. Sample `nodejs` app with distributed tracing [here](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/).
2. Using `winston` instrumented version [here](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/plugins/node/opentelemetry-instrumentation-winston).

