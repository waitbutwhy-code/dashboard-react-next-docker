import React from "react";
import { Provider, Flex, Box } from "rebass";

import firebase from "../../lib/firebase";
import RfpDetails from "../../components/rfp/RfpDetails";

export default class extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  state = { loading: true, rfpData: {}, updateFunction: undefined };

  componentDidMount = async () => {
    // Create a reference to the specific RFP in the database
    this.itemRef = firebase.database().ref(`rfps/${this.props.id}`);

    // When this handler mounts (and on subsequent changes),
    // load the data into the component state
    this.itemRef.on(`value`, (snapshot) => {
      const rfpData = snapshot.val();
      console.log(rfpData);
      this.setState(() => ({
        loading: false,
        rfpData,
        updateFunction: newData => this.itemRef.update(newData),
      }));
    });
  };

  componentWillUnmount() {
    this.itemRef.off();
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
            {this.state.loading
              ? <div>Loading...</div>
              : <RfpDetails
                rfpData={this.state.rfpData}
                id={this.props.id}
                updateFunction={this.state.updateFunction}
              />}
          </Box>
        </Flex>
      </Provider>
    );
  }
}
