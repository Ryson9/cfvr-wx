import request from '@/utils/request'

const userApi = {
  login(data: any = { user: '123', pass: '4567890' }) {
    return request({
      url: '/userLogin',
      method: 'get',
      params: data,
    })
  },
  getProFile(userId: string = 'zhangsan') {
    return request({
      url: '/getProFile',
      method: 'post',
      data: { userId },
    })
  },
}

export default userApi
