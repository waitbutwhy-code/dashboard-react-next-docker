import React from "react";
import { Box, Button } from "rebass";

import { convertObjToArray } from "../../lib/utils";
import RfpItem from "./RfpItem";

export default class extends React.Component {
  state = { sortBy: `createdAt`, ascendingOrder: true };

  sortByCreated = () => this.setState({ sortBy: `createdAt` });
  sortByDeadline = () => this.setState({ sortBy: `deadline` });

  toggleSortOrder = () =>
    this.setState(prevState => ({ ascendingOrder: !prevState.ascendingOrder }));

  render() {
    const { sortBy, ascendingOrder } = this.state;
    const RfpArray = convertObjToArray(this.props.rfpObj);
    const sortedRfps = RfpArray.sort((a, b) => a[sortBy] > b[sortBy]);
    const orderedRfps = ascendingOrder ? sortedRfps.reverse() : sortedRfps;
    return (
      <Box>
        <Button m={1} onClick={this.sortByCreated}>Sort by Created Date</Button>
        <Button m={1} onClick={this.sortByDeadline}>
          Sort by Deadline Date
        </Button>
        <Button m={1} onClick={this.toggleSortOrder}>
          {ascendingOrder ? `Ascending` : `Descending`}
        </Button>
        {orderedRfps.map(rfp => <RfpItem key={rfp.id} rfp={rfp} />)}
      </Box>
    );
  }
}
