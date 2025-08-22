import axios from 'axios'
import {baseUrl} from './Constants.jsx'

const newAxios = axios.create({
  baseUrl: baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

export default newAxios
