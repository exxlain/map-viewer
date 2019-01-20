import { createLogic } from 'redux-logic'
import mapEndpoint from '../api/mapEndpoint'
import { SYNC_MAP, SYNC_CANCEL_MAP } from '../constants/map'
import { updateMap, syncFailed } from '../actions/map'

const shadowInLogic = createLogic({
  type: SYNC_MAP,
  cancelType: SYNC_CANCEL_MAP,

  process({ action }, dispatch, done) {
    mapEndpoint.getMap(action.number)
      .then((response) => {
        const { data } = response
        dispatch(updateMap(data))
        done()
      }).catch((error) => {
        dispatch(syncFailed(error))
        return false
      })
  },
})

export default shadowInLogic
