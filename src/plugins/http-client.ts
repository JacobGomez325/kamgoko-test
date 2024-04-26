import axios from 'axios'

const API_BASE_URL = "https://gorest.co.in"

const config = {
  baseURL: API_BASE_URL + '/public/v2/',
  timeout: 60 * 1000, // Timeout
  //withCredentials: true, // Check cross-site Access-Control,
  headers: {
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json,multipart/form-data'
    }
  }
}

const httpClient = axios.create(config)

export { httpClient }
