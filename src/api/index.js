import http from './http'

export const fetchBlogsApi = params => http.get('/api/blogs/', { params })

export const fetchBlogDetailApi = id => http.get(`/api/blogs/${id}`)

export const fetchCategorysApi = () => http.get('/api/categorys/')

export const fetchFriendsApi = () => http.get('/api/friends/')

export const fetchPicturesApi = params => http.get('/api/summarys/', { params })
