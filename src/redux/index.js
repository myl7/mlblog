import {createStore} from 'redux'
import postFilter from './postFilter'

/**
 * @typedef {Object} State
 * @property {Post[]} posts
 *
 * @typedef {Object} Post
 * @property {string} slug
 * @property {string} title
 * @property {string} abstract
 * @property {string} body
 * @property {string} publishDate
 * @property {string} updateDate
 *
 * @type {State}
 */
export const initState = {
  posts: []
}

const reducer = (s, a) => {
  const sep = a.type.indexOf('.')
  const app = a.type.substring(0, sep)
  a.type = a.type.substring(sep + 1)

  switch (app) {
    case 'post':
      return postFilter(s, a)
    default:
      return s
  }
}

export const store = createStore(reducer, initState)
