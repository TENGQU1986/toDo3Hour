import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



const demoState = {
  listItem: [{
    id:'a;sldkfjasdfj',
    title: 'first thing',
    category: 'a',
    note: ''
  }]
};

//set action ADD_LIST_ITEM

const addListItem = ({ title = '', category = '', note = '', } = {}) => ({
  type: 'ADD_LIST_ITEM',
  item: {
    title,
    category,
    note,
    id: uuid()
  }
});

//set REMOVE_LIST_ITEM

const removeListItem = ({ id } = {}) => ({
  type: 'REMOVE_LIST_ITEM',
  id
});

//listItemsReducer

const listReducerDefaultState = [];

const listItemsReducer = (state = listReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_LIST_ITEM':
      return [...state, action.item];
    case 'REMOVE_LIST_ITEM':
      return state.filter(({ id }) => id !== action.id);
    default: 
      return state;
  }
};


//Store creation

const store = createStore(
  combineReducers({
    listItems: listItemsReducer
}));

store.subscribe(() => {
  console.log(store.getState());
});

const itemOne = store.dispatch(addListItem({title: 'lalala'}));
const itemTwo = store.dispatch(addListItem({title: 'wash hands'}));
store.dispatch(removeListItem({ id: itemOne.item.id}));




