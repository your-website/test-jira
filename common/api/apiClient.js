import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getRepositories(page, perPage, sort) {
    console.log('sort')
    console.log(sort)
    const sortRepo = sort === 'default' || sort === null ? '' : `sort=${sort}&`
    return apiClient.get(
      `/search/repositories?q=${sortRepo}page=${page}&per_page=${perPage}`
    )
  }
}

export const getRep = callback => {
  apiClient
    .get(`/search/repositories?q=page=1&per_page=30`)
    .then(res => {
      const { data, items, total_count } = res
      callback(data)
    })
    .catch(err => console.log(err))
}
