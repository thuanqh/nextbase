import React from "react";
import { ThemeProvider } from "styled-components";
import { Box, theme } from "agonkit";
import Head from "next/head";
import Link from "next/link";

import GlobalStyles from "../utils/global-styles";

export default ({ children, title = "This is the default title" }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
      </Head>
      <Box as="header">
        <nav>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          <Link href="/login">
            <a href="/login">Login</a>
          </Link>
          <Link href="/signup">
            <a href="/signup">Sigup</a>
          </Link>
        </nav>
      </Box>

      {children}

      <footer>{"I`m here to stay"}</footer>
    </>
  </ThemeProvider>
);
