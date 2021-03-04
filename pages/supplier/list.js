import React from "react";
import { Provider, Flex, Box, Heading } from "rebass";

import firebase from "../../lib/firebase";
import SupplierList from "../../components/supplier/SupplierList";

export default class extends React.Component {
  state = {
    loading: true,
    supplierObj: {},
  };

  componentDidMount() {
    // Create a reference to the suppliers collection in the database
    this.suppliersRef = firebase.database().ref(`suppliers`);

    // When this handler mounts (and on subsequent changes),
    // load the data into the component state
    this.suppliersRef.on(`value`, (snapshot) => {
      const suppliers = snapshot.val();
      console.log(suppliers);
      this.setState(() => ({ loading: false, supplierObj: suppliers }));
    });
  }

  componentWillUnmount() {
    this.suppliersRef.off();
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
              Suppliers
            </Heading>
            {this.state.loading
              ? <div>Loading...</div>
              : <SupplierList supplierObj={this.state.supplierObj} />}
          </Box>
        </Flex>
      </Provider>
    );
  }
}
