import { api } from './api.js'

export const getUserByUsername = (username) => {
  return fetch(`${api}/users/${username}`)
    .then(data => data.json())
    .then(({ login, name, public_repos, followers }) => ({ login, name, public_repos, followers }))
}