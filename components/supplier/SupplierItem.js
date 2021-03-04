import React from "react";
import styled from "styled-components";
import { Card, Subhead, Text } from "rebass";

const Container = styled(Card).attrs({
  p: 2,
  my: 2,
  width: 1,
  fontSize: 1,
})`
  position: relative;
`;

export default ({ supplier }) => {
  const { company, email, ...data } = supplier;
  return (
    <Container>
      <Subhead>{company}</Subhead>
      <Text>{email}</Text>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Container>
  );
};
