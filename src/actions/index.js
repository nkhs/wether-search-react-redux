import axios from 'axios'

const API_KEY = '40053b8815040ff2d230b8f1af4d9cce';
var ROOT = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT}&q=${city},cn`
    const request = axios.get(url)

    console.log('Request:', request)
    return {
        type: FETCH_WEATHER,
        payload: request

    }
}