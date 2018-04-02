import React from 'react';

class AddNewItem extends React.Component {
  state = {
    title: '',
    category: '',
    note: '',
    error: ''
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title) {
      this.setState(() => ({ error: 'please provide title'}));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        title: this.state.title,
        category: this.state.category,
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div className="content-container">
        {this.state.error !== '' && <p>{this.state.error}</p>}
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="title"
            className="text-input"
            value={this.state.title}
            onChange={this.onTitleChange}
            autoFocus
          />
          <input
            type="text"
            placeholder="category"
            className="text-input"
            value={this.state.category}
            onChange={this.onCategoryChange}
          />
          <textarea
            placeholder="write some note here(optional)"
            className="textarea"
            value={this.state.note}
            onChange={this.onNoteChange} 
          />
          <div>
            <button className="button">Add New</button>
          </div>
        </form>
      </div>
    );
  }
};

export default AddNewItem;