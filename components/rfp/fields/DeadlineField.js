import React from "react";
import { Text } from "rebass";

import { timestampInDateStr, timestampInWordsToNow } from "../../../lib/utils";

export default class extends React.Component {
  state = { editing: false, currentDate: null };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ currentDate: timestampInDateStr(this.props.timestamp) });
  }

  toggleEditing = () =>
    this.setState(prevState => ({ editing: !prevState.editing }));

  handleDateChange = e => this.setState({ currentDate: e.target.value });

  saveNewDeadlineDate = () => {
    const newDate = new Date(this.state.currentDate);
    this.props.updateDeadline(newDate.getTime() / 1000);
    this.toggleEditing();
  };

  renderEditing = () => (
    <div>
      Editing:
      {` `}
      <input
        type="date"
        value={this.state.currentDate}
        onChange={this.handleDateChange}
      />
      <button onClick={this.toggleEditing}>Cancel</button>
      <button onClick={this.saveNewDeadlineDate}>Save</button>
    </div>
  );

  render() {
    const { timestamp } = this.props;
    const deadlineStr = `${timestampInDateStr(timestamp)} (${timestampInWordsToNow(timestamp)})`;
    return this.state.editing
      ? this.renderEditing()
      : <Text>
          Deadine: {deadlineStr}
        <button onClick={this.toggleEditing}>Edit</button>
      </Text>;
  }
}
