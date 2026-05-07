/*
 * @Author: czy0729
 * @Date: 2024-05-17 04:22:48
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-07 18:51:49
 */
import React, { forwardRef, useCallback } from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { stl } from '@utils'
import { styles } from './styles'

import type { FlatList, ListRenderItemInfo } from 'react-native'
import type { Props } from './types'

function EnteringExiting<ItemT>(
  { style, skipEnteringExitingAnimations = 10, renderItem, ...other }: Props<ItemT>,
  ref: React.ForwardedRef<FlatList<ItemT>>
) {
  const renderAnimatedItem = useCallback(
    (info: ListRenderItemInfo<ItemT>) => {
      const el = renderItem(info)
      if (info.index >= skipEnteringExitingAnimations) return el

      return <Animated.View entering={FadeInDown.duration(640)}>{el}</Animated.View>
    },
    [skipEnteringExitingAnimations, renderItem]
  )

  return (
    <Animated.FlatList
      ref={ref}
      {...other}
      style={stl(styles.flatList, style)}
      skipEnteringExitingAnimations
      renderItem={renderAnimatedItem}
    />
  )
}

export default forwardRef(EnteringExiting)
