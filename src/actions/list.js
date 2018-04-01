import uuid from 'uuid';

//set action ADD_LIST_ITEM

export const addListItem = ({ title = '', category = '', note = '', } = {}) => ({
  type: 'ADD_LIST_ITEM',
  item: {
    title,
    category,
    note,
    id: uuid()
  }
});

//set REMOVE_LIST_ITEM

export const removeListItem = ({ id } = {}) => ({
  type: 'REMOVE_LIST_ITEM',
  id
});