import React from "react";
import { Provider, Flex, Box, Heading } from "rebass";

import firebase from "../../lib/firebase";
import RfpList from "../../components/rfp/RfpList";

export default class extends React.Component {
  state = {
    loading: true,
    rfpObj: {},
  };

  componentDidMount() {
    // Create a reference to the RFPs in the database
    this.rfpsRef = firebase.database().ref(`rfps`);

    // When this handler mounts (and on subsequent changes),
    // load the data into the component state
    this.rfpsRef.on(`value`, (snapshot) => {
      const rfps = snapshot.val();
      console.log(rfps);
      this.setState(() => ({ loading: false, rfpObj: rfps }));
    });
  }

  componentWillUnmount() {
    this.rfpsRef.off();
  }

  render() {
    return (
      <Provider>
        <Flex direction="column">
          <Flex is="header">
            <Box
              p={2}
              width={1}
              bg={`darkslateblue`}
              color={`white`}
              fontSize={4}
            >
              SyncSpot
            </Box>
          </Flex>
          <Box p={2}>
            <Heading>
              RFPs
            </Heading>
            {this.state.loading
              ? <div>Loading...</div>
              : <RfpList rfpObj={this.state.rfpObj} />}
          </Box>
        </Flex>
      </Provider>
    );
  }
}
