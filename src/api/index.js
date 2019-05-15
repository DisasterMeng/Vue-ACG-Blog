import http from './http'

export const notice = () => http.get('/api/notice/')

export const blogs = params => http.get('/api/blogs/', { params })

export const blogDetail = id => http.get(`/api/blogs/${id}`)

export const blogMD = params => http.get('/api/blogs/md-to-html/', { params })

export const categorys = () => http.get('/api/categorys/')

export const friends = () => http.get('/api/friends/')

export const summarys = params => http.get('/api/summarys/', { params })

export const live2d = params => http.get('/api/live2d/name', { params })

export const music = () => http.get('/api/music/')

export const summaryRandom = `${process.env.VUE_APP_BASE_URL}api/summarys/random/`
