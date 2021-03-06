import Axios from 'axios'

const ENDPOINT = 'http://woolstrand.art:9000/maps/json2'

const getMap = code => Axios.get(`${ENDPOINT}/${code}`, {})

export default {
  getMap,
}
