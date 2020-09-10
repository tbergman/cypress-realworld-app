import React from "react";
import ReactDOM from "react-dom";
import { inspect } from "@xstate/inspect";
import { Router } from "react-router-dom";
import { history } from "./utils/historyUtils";

import App from "./containers/App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

inspect({ iframe: false });

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#fff",
    },
  },
});

ReactDOM.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
