import React, { Component } from "react";

import ExampleComponent from "@drifters/react-media-loader";

export default class App extends Component {
  render() {
    const publicUrl = `Modern React component module ${
      process.env.PUBLIC_URL
    } hello`;
    return (
      <div>
        <ExampleComponent text={publicUrl} />
      </div>
    );
  }
}
