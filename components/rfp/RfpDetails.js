import React from "react";
import Link from "next/link";
import { Text, Box, Heading } from "rebass";

import { timestampInDateStr, timestampInWordsToNow } from "../../lib/utils";
import DeadlineField from "./fields/DeadlineField";
import CommentsField from "./fields/CommentsField";
import StatusField from "./fields/StatusField";

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default ({ rfpData: rfp, updateFunction }) => {
  const createdStr = `${timestampInDateStr(rfp.createdAt)} (${timestampInWordsToNow(rfp.createdAt)} ago)`;
  return (
    <Box>
      <Link href="/rfp/list"><a>Back to RFP List</a></Link>
      <Heading>{rfp.company}</Heading>
      <Text>Created: {createdStr}</Text>
      <DeadlineField
        timestamp={rfp.deadline}
        updateDeadline={newDate => updateFunction({ deadline: newDate })}
      />
      <Text>
        Uploaded File:
        {` `}
        <ExternalLink href={rfp.location}>Click to Open</ExternalLink>
      </Text>
      <Text>
        Email:
        {` `}
        <ExternalLink href={`mailto:${rfp.email}`}>{rfp.email}</ExternalLink>
      </Text>
      <StatusField
        status={rfp.status}
        updateStatus={newStatus => updateFunction({ status: newStatus })}
      />
      <CommentsField
        comments={rfp.comments}
        updateComments={newComments =>
          updateFunction({ comments: newComments })}
      />
    </Box>
  );
};
