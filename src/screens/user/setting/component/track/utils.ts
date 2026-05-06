/*
 * @Author: czy0729
 * @Date: 2026-05-05 19:37:23
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-05 19:38:13
 */
import { usersStore } from '@stores'
import { fetchUsersV0 } from '@utils/fetch.v0'

import type { UserId } from '@types'

export async function getUsersThenUpdateInfo(userId: UserId) {
  const users = await fetchUsersV0(userId, {
    auth: false
  })
  if (users?.username && users?.avatar && users?.nickname) {
    usersStore.updateUsersInfo({
      avatar: users.avatar.large,
      userId: users.username,
      userName: users.nickname
    })

    return true
  }

  return false
}
