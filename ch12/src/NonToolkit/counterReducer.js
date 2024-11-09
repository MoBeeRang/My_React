const initialState = { value: 0 }

function conterReducer(state = initialState, action) {
   //action = {type:'up', step:2}
   if (action.type === 'up') {
      return { ...state, value: state.value + action.step }
   }
   return state
}

export default conterReducer