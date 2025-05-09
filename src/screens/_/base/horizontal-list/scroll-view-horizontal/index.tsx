/*
 * @Author: czy0729
 * @Date: 2023-11-08 00:47:23
 * @Last Modified by: czy0729
 * @Last Modified time: 2024-07-24 20:13:25
 */
import React from 'react'
import { ScrollView } from 'react-native'
import { useObserver } from '@utils/hooks'
import { SCROLL_VIEW_RESET_PROPS } from '@constants'
import { memoStyles } from './styles'

function ScrollViewHorizontal({ children, ...other }) {
  return useObserver(() => {
    const styles = memoStyles()
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        scrollEventThrottle={16}
        {...SCROLL_VIEW_RESET_PROPS}
        {...other}
        horizontal
      >
        {children}
      </ScrollView>
    )
  })
}

export default ScrollViewHorizontal
