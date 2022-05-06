import request from '@/utils/request'

export const getFeature = () => {
  return request({
    url: '/user/feature'
  })
}

export const getChapter = () => {
  return request({
    url: '/user/chapter'
  })
}
