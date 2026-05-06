/*
 * @Author: czy0729
 * @Date: 2023-04-25 14:05:35
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-05 19:43:17
 */
import { getTimestamp } from '@utils'
import { fetchUsersV0 } from '@utils/fetch.v0'
import { D3 } from '@constants'
import userStore from '../user'
import Fetch from './fetch'

import type { UserId } from '@types'
export default class Actions extends Fetch {
  autoUpdateAvatars = async (
    list: any[],
    userIdKey: string = 'userId',
    avatarIdKey: string = 'avatar'
  ) => {
    if (!list?.length) return false

    const key = 'avatars'
    await this.init(key)

    const data: Record<UserId, string> = {}
    list.forEach(item => {
      const userId = item?.[userIdKey]
      const avatar = item?.[avatarIdKey]
      if (userId && avatar) {
        if (avatar.includes('/l/000/')) {
          data[userId] = avatar.split('/l/000/')?.[1]
        } else if (avatar.includes('/l/icon.jpg')) {
          data[userId] = 'icon.jpg'
        }
      }
    })

    const { avatars } = this.state
    Object.entries(data).forEach(([userId, avatar]) => {
      if (avatars[userId] === avatar) delete data[userId]
    })

    if (Object.keys(data).length) {
      this.setState({
        [key]: {
          ...avatars,
          ...data
        }
      })
      this.save(key)
    }

    return true
  }

  /** 若登录了, 而且在若干天内没更新过好友列表, 请求好友列表, 用于帖子楼层标记是否好友 */
  updateFriendsMap = () => {
    if (userStore.isLogin) {
      const { _loaded } = this.myFriendsMap
      if (!_loaded || getTimestamp() - _loaded > D3) {
        this.fetchFriends()
      }
    }
  }

  /** 更新用户简短信息 */
  updateUsersInfo = async (item: { avatar: string; userId: UserId; userName: string }) => {
    const STATE_KEY = 'usersInfo'
    const ITEM_KEY = item.userId
    await this.init(STATE_KEY)

    this.setState({
      [STATE_KEY]: {
        [ITEM_KEY]: {
          ...item,
          _loaded: getTimestamp()
        }
      }
    })
    this.save(STATE_KEY)
  }

  /** 从 v0 接口获取用户信息后, 更新用户简短信息返回 true, 若用户不存在则返回 false */
  getUsersThenUpdateInfo = async (userId: UserId) => {
    const users = await fetchUsersV0(userId, {
      auth: false
    })
    if (users?.username && users?.avatar && users?.nickname) {
      this.updateUsersInfo({
        avatar: users.avatar.large,
        userId: users.username,
        userName: users.nickname
      })
      return true
    }

    return false
  }
}
