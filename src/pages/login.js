import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => {
  return (
    <Layout>
      <Title>Login</Title>
    </Layout>
  );
};
