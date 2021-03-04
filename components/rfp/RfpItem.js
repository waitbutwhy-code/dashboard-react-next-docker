import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Card, Text, Subhead } from "rebass";

import { timestampInDateStr, timestampInWordsToNow } from "../../lib/utils";

const statusColorTable = {
  RFP_RECEIVED: `red`,
  PROPOSALS_COMPLETED: `lightgray`,
  PROPOSALS_SELECTED: `green`,
};

const Status = styled.span`
  font-size: 12px;
  color: ${props => statusColorTable[props.status]};
`;

const Container = styled(Card).attrs({
  p: 2,
  my: 2,
  width: 1,
  fontSize: 1,
})`
  position: relative;
`;

const Title = styled(Subhead).attrs({ mb: 1, f: 2 })`
  cursor: pointer;
`;

export default ({ rfp }) => (
  <Container>
    <Link href={`/rfp/details?id=${rfp.id}`}>
      <Title title={`id: ${rfp.id}`}>
        {rfp.company} <Status status={rfp.status}>{rfp.status}</Status>
      </Title>
    </Link>
    <Text title={timestampInDateStr(rfp.createdAt)}>
      Received {timestampInWordsToNow(rfp.createdAt)} ago
    </Text>
    <Text title={timestampInDateStr(rfp.deadline)}>
      Due in {timestampInWordsToNow(rfp.deadline)}
    </Text>
  </Container>
);
