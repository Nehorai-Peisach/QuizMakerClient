import { Component } from "react";

// jsx class component
class QuestionsForm extends Component {
  state = { title: "", errors: {} };

  handleChange = (e) => {
    this.setState({ title: e.currentTarget.value, errors: {} });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const questionToAdd = { Title: this.state.title };
    this.props.onAddQuestion(questionToAdd);
    this.setState({ title: "" });
  };

  validate = () => {
    const errors = {};
    if (this.state.title.trim() === "") errors.title = "Title is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { title, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group space">
            <label htmlFor="title">Title: </label>
            <input
              value={title}
              onChange={this.handleChange}
              id="title"
              type="text"
              className="input form-control"
            />
            {errors.title && (
              <div className="alert alert-danger">{errors.title}</div>
            )}
          </div>
          <button className="btn btn-primary btn-sm">Add question</button>
        </form>
      </div>
    );
  }
}

export default QuestionsForm;
