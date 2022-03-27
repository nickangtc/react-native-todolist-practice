// ? Not sure that controller is the best name for this file.

const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

const createTodo = title => ({title, id: Math.random()});

export const actionCreators = {
  add: title => ({type: types.ADD, payload: createTodo(title)}),
  remove: id => ({type: types.REMOVE, payload: id}),
};

export const initialState = {
  todos: [
    createTodo('Learn React Native'),
    createTodo('Learn Redux'),
    createTodo('Learn React Navigation'),
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case types.REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
