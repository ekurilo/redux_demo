const initialState = [
  {
    id: 1,
    entry: {
      key: 'key',
      value: 'value'
    }
  }
];

export default function entries(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ENTRY':
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          entry: action.entry
        }
      ];

    case 'EDIT_ENTRY':
      return state.map(elem => elem.id === action.id ? {...elem, entry: action.entry} : elem);

    case 'DELETE_ENTRY':
      return state.filter(elem => elem.id !== action.id);

    default:
      return state;
  }
};
