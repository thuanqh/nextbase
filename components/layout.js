import React from "react";
import Head from "next/head";
import Link from "next/link";

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a href="/">Home</a>
        </Link>
        <Link href="/about">
          <a href="/about">About</a>
        </Link>
        <Link href="/contact">
          <a href="/contact">Contact</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer>{"I`m here to stay"}</footer>
  </div>
);
