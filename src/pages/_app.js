import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "agonkit";
import GlobalStyle from "../utils/global-styles";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
