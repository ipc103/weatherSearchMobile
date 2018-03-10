import { WUNDERGROUND_API_KEY } from '../env'

const BASE_URL = `http://api.wunderground.com/api/${WUNDERGROUND_API_KEY}/geolookup/conditions/q/`

export function fetchCurrentConditions(city, state){
  return fetch(`${BASE_URL}/${city},${state}.json`).then(parseJson)
}

function parseJson(res){
  return res.json()
}
