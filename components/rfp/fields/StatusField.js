import React from "react";

export default class extends React.Component {
  state = { currentStatus: `RFP_RECEIVED` };
  componentDidMount = () => this.setState({ currentStatus: this.props.status });

  handleChange = (e) => {
    const newStatus = e.target.value;
    this.setState({ currentStatus: newStatus });
    this.props.updateStatus(newStatus);
  };

  render() {
    return (
      <div>
        Status: <select
          value={this.state.currentStatus}
          onChange={this.handleChange}
        >
          <option value="RFP_RECEIVED">RFP_RECEIVED</option>
          <option value="PROPOSALS_COMPLETED">PROPOSALS_COMPLETED</option>
          <option value="PROPOSALS_SELECTED">PROPOSALS_SELECTED</option>
        </select>
      </div>
    );
  }
}
