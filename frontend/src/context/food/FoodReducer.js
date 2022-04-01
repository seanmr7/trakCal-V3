const profileReducer = (state, action) => {
  switch (action.type) {
    case 'GET_FOOD':
      return {
        ...state,
        food: action.payload,
      }
    case 'CREATE_FOOD':
      return {
        ...state,
        food: [...state.food, action.payload],
      }
    case 'DELETE_FOOD':
      return {
        ...state,
        food: state.food.filter((food) => food._id !== action.payload),
      }
    case 'EDIT_FOOD':
      return {
        ...state,
        food: state.food.map((food) =>
          food._id === action.payload._id ? action.payload : food
        ),
        activeFood: {},
        isEdit: false,
      }
    case 'MAKE_ACTIVE':
      return {
        ...state,
        activeFood: state.food.find((food) => food._id === action.payload),
      }
    case 'IS_ERROR':
      return {
        ...state,
        isError: true,
        message: action.payload,
      }
    case 'SET_EDIT_STATE':
      return {
        ...state,
        isEdit: action.payload,
      }
    case 'DEFAULT':
      return {
        ...state,
        food: [],
      }
    default:
      return state
  }
}

export default profileReducer
