const initialState = '';

export default function filter(state = initialState, action) {
  if (action.type === 'FIND') {
    return action.payload;
  }
  if (action.type === 'SORT_BY_ID') {
    return action.payload;
  }
  return state;
}