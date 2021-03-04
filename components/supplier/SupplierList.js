import React from "react";
import { Box, Label, Input } from "rebass";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";

import { convertObjToArray } from "../../lib/utils";
import SupplierItem from "./SupplierItem";

export default class extends React.Component {
  state = { searchInput: ``, searchStr: `` };

  componentDidMount() {
    this.subscription = this.onSearch$
      .debounceTime(200)
      .subscribe(x => this.setState({ searchStr: x }));
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSearch$ = new Subject();

  handleSearchInputChange = (e) => {
    const value = e.target.value;
    this.setState({ searchInput: value });
    this.onSearch$.next(value);
  };

  render() {
    const suppliersArray = convertObjToArray(this.props.supplierObj);
    const filteredSuppliers = suppliersArray.filter((x) => {
      const needle = this.state.searchStr.toLowerCase();
      const hay = x.company.toLowerCase();
      return hay.includes(needle);
    });
    return (
      <Box>
        <Box my={3} width={[1, 1 / 2, 1 / 3, 1 / 4]}>
          <Label>Search</Label>
          <Input
            onChange={this.handleSearchInputChange}
            placeholder="Search company name here"
            value={this.state.searchInput}
          />
          <p>Searching: {this.state.searchStr}</p>
        </Box>
        {filteredSuppliers.map(supplier => (
          <SupplierItem key={supplier.id} supplier={supplier} />
        ))}
      </Box>
    );
  }
}
