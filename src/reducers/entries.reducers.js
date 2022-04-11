export const entriesReducer = (state = initialEntries, action) => {
  let newEntries;

  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    default:
      return state;
  }
};

export const initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 100,
    isExpense: false
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20,
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: 300,
    isExpense: true
  },
  {
    id: 4,
    description: 'Power Bill',
    value: 50,
    isExpense: true
  }
];
