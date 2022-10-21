import _axios from 'axios'

const token = ``
const axios = _axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})

export {
  axios,
}
