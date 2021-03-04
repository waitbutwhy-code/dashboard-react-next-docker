import React from "react";

export default class extends React.Component {
  state = { editing: false, editText: `` };

  componentDidMount = () => this.setState({ editText: this.props.comments });

  toggleEditing = () =>
    this.setState(prevState => ({ editing: !prevState.editing }));

  saveComments = () => {
    this.props.updateComments(this.state.editText);
    this.toggleEditing();
  };

  handleEditTextChange = (e) => {
    const value = e.target.value;
    this.setState({ editText: value });
  };

  renderEditing = () => (
    <div>
      <div>Comments (editing):</div>
      <textarea
        value={this.state.editText}
        onChange={this.handleEditTextChange}
        cols="30"
        rows="10"
      />
      <button onClick={this.toggleEditing}>Cancel</button>
      <button onClick={this.saveComments}>Save</button>
    </div>
  );

  renderComments = () => {
    const { comments } = this.props;
    const emptyComments = comments && comments.trim().length > 0;
    return (
      <div>
        Comment: {emptyComments ? comments : `n/a `}
        <button onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  };
  render() {
    return this.state.editing ? this.renderEditing() : this.renderComments();
  }
}
