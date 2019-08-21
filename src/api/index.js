import http from './http'
import querystring from 'querystring'

export const about = () => http.get('/api/about/')

export const notice = () => http.get('/api/notice/')

export const blogs = params => http.get('/api/blogs/', { params })

export const blogDetail = id => http.get(`/api/blogs/${id}`)

export const blogMD = params => http.get('/api/blogs/md-to-html/', { params })

export const blogComment = id => http.get(`/api/blogs/${id}/comments/`)

export const categorys = () => http.get('/api/categorys/')

export const friends = () => http.get('/api/friends/')

export const summarys = params => http.get('/api/summarys/', { params })

export const live2d = params => http.get('/api/live2d/name', { params })

export const music = () => http.get('/api/music/')

export const summaryRandom = `${process.env.VUE_APP_BASE_URL}api/summarys/random/`

export const githubLoginUrl = params => `${process.env.VUE_APP_BASE_URL}api/oauth/github-third-url/?${querystring.stringify(params)}`

export const addComment = data => http.post('/api/comments/', data)

export const commentUser = () => http.get('/api/user/my-info/')
