import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem';
import AddNewItem from './AddNewItem';
import { addListItem } from '../actions/list';


const DashboardPage = (props) => (
    <div>
      <h1>To Do List</h1>
      <AddNewItem onSubmit={(item) => {
        props.dispatch(addListItem(item));
      }}/>

      {props.listItems.map((item) => {
        return <ListItem key={item.id} {...item}/>
    })}
    </div>
  );

  const mapStateToProps = (state) => {
    return {
      listItems: state.listItems
    };
  };

export default connect(mapStateToProps)(DashboardPage);
