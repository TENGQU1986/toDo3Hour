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

export default listItemsReducer;