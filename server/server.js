/* eslint-disable no-console, no-use-before-define */

import Express from "express";
const bodyParser = require("body-parser");
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config";

import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";

import configureStore from "../common/store/configureStore";
import App from "../common/containers/App";
import { getRep } from "../common/api/apiClient";
import { StaticRouter } from "react-router-dom";
import { testFetch } from "../common/api/counter";

const app = new Express();
const port = 3000;

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));

const handleRender = (req, res) => {
  // Query our mock API asynchronously
  testFetch((asd) => {
    // Compile an initial state

    const repositories = {
      total_count: 12,
      items: [
        {
          id: 123,
          forks: 12,
          name: "roman",
          size: 23,
          watchers: 35,
          owner: {
            avatar_url:
              "https://www.kinonews.ru/insimgs/poster/poster9623_1.jpg",
            login: "kotin",
          },
        },
      ],
    };

    const preloadedState = { repositories };
    // Create a new Redux store instance
    const store = configureStore(preloadedState);

    // Render the component to a string
    const html = renderToString(
      <StaticRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
  });
};

// This is fired every time the server side receives a request
app.use(handleRender);

const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
        <title>GitHub API</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\x3c"
          )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
};

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      `==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`
    );
  }
});
