/*
 * @Author: czy0729
 * @Date: 2022-06-14 11:32:29
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-05 20:32:38
 */
import type { ImageProps } from '@components'
import type { EventType, UserId, WithNavigation, WithViewStyles } from '@types'

export type Props = WithNavigation<
  WithViewStyles<{
    /** 是否显示追踪爱心图标 */
    like?: boolean
    userId: UserId
    userName: string
    avatar: ImageProps['src']
    size?: ImageProps['size']
    radius?: ImageProps['radius']
    mini?: boolean
    event?: EventType
    onPress?: ImageProps['onPress']
  }>
>
