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

To start the app *with* instrumentation exported to an otlp cloud service,  `ConsoleSpanExporter` in [tracing.js](./tracing.js) should be replaced
with an otlp exporter. See [tracing-otlp.js](./tracing-otlp.js)
```
node --require './tracing-otlp.js' app.js
```

>_Make sure to start your otlp endpoint. See [here](https://grafana.com/blog/2021/04/13/how-to-send-traces-to-grafana-clouds-tempo-service-with-opentelemetry-collector/) for a sample setup of the
[grafana cloud agent](https://grafana.com/docs/grafana-cloud/data-configuration/agent/) as your otlp endpoint for sending your metrics to [tempo](https://grafana.com/docs/tempo/latest/)._

Log Shipping
------------
To make the logged output ready to be consumed by log shippers, logged output should be in
JSON-line formatted. This requires removing `format` from `winston.transports.Console` in [logger.js](./logger.js).

References
----------
1. Sample `nodejs` app with distributed tracing [here](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/).
2. Using `winston` instrumented version [here](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/plugins/node/opentelemetry-instrumentation-winston).
3. Exporting traces to an otlp backend service [here](https://opentelemetry.io/docs/instrumentation/js/exporters/).

