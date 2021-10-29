import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const IndexPage = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next Base
        </Typography>
        <Button variant="contained" color="primary">
          Hello Nextbase
        </Button>
      </Box>
    </Container>
  );
};
export default IndexPage;
