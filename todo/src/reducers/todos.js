const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
    console.log('TOGGLE_TODO',state,action);
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_TODO':
    console.log('DELETE_TODO',state,action);
    const newState= [];
    for (var i = 0; i < state.length; i++) {
        if(state[i].id !== action.id){
          newState.push(state[i]);
        }
    }
    return  newState
    default:
      return state
  }
}

export default todos
