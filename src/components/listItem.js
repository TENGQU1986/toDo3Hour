import React from 'react';
import { connect } from 'react-redux';
import { removeListItem } from '../actions/list';

const ListItem = ({ dispatch, title, category, note, id }) => (
  <div>
    <h3>{title}</h3>
    <p>{category} - {note}</p>
    <button onClick={() => {
      dispatch(removeListItem({ id }));
    }}>Remove</button>
    
  </div>
);

const mpaStateToProps = (state) => {
  return {
    listItems: state.listItems
  };
};

export default connect(mpaStateToProps)(ListItem);