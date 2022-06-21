const initialState = '';

export default function filter(state = initialState, action) {
  if (action.type === 'FIND') {
    return action.payload;
  }
  return state;
}