import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
// Theme
import theme from "./helpers/theme";

import Calendars from "./Containers/Calendars";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Calendars />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
