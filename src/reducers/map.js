import * as type from '../constants/map'

const initialState = {
  data: [],
}

const map = (state = initialState, action) => {
  switch (action.type) {
  case type.UPDATE_MAP:
    return {
      ...state,
      data: action.data,
    }
  case type.SYNC_FAILED_MAP:
    return { ...state, errorMessage: action.message, progress: false }
  default:
    return state
  }
}

export default map
