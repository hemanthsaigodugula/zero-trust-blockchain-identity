import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://ztb-backend.onrender.com',
  withCredentials: false
})

export default apiClient
