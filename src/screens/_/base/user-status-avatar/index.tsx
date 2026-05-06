/*
 * @Author: czy0729
 * @Date: 2024-10-01 17:26:45
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-05 20:32:33
 */
import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react'
import { Avatar, Iconfont, UserStatus } from '@components'
import { _ } from '@stores'
import { useNavigation } from '@utils/hooks'
import { COMPONENT } from './ds'
import { memoStyles } from './styles'

import type { Props as UserStatusAvatarProps } from './types'
export type { UserStatusAvatarProps }

/** 用户状态头像, 支持显示追踪 */
export const UserStatusAvatar = observer(
  ({
    navigation,
    style,
    like,
    userId,
    userName,
    avatar,
    size,
    radius,
    mini,
    event,
    onPress
  }: UserStatusAvatarProps) => {
    const navigationRef = useNavigation(COMPONENT) || navigation

    const styles = memoStyles()
    if (like) {
      return (
        <View style={style}>
          <Avatar
            navigation={navigationRef}
            userId={userId}
            name={userName}
            src={avatar}
            size={size}
            radius={radius}
            event={event}
            onPress={onPress}
          />
          <Iconfont style={styles.favor} name='md-favorite' color={_.colorMain} size={12} />
        </View>
      )
    }

    return (
      <View style={style}>
        <UserStatus userId={userId} mini={mini}>
          <Avatar
            navigation={navigationRef}
            userId={userId}
            name={userName}
            src={avatar}
            size={size}
            radius={radius}
            event={event}
            onPress={onPress}
          />
        </UserStatus>
      </View>
    )
  }
)

export default UserStatusAvatar
