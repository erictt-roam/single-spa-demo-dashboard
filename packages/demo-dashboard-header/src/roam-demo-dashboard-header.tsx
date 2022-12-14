import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import Header from "./Header";

export const header = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = header;
