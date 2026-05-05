/*
 * @Author: czy0729
 * @Date: 2024-04-23 20:57:42
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-04 14:46:27
 */
import React from 'react'
import { observer } from 'mobx-react'
import { ItemSetting } from '@_'
import { TEXTS } from '../ds'

/** 特色功能 */
function Tips({ navigation, filter, setFalse }) {
  return (
    <ItemSetting
      arrow
      highlight
      filter={filter}
      {...TEXTS.tips}
      onPress={() => {
        setFalse()

        setTimeout(() => {
          navigation.push('Tips')
        }, 160)
      }}
    />
  )
}

export default observer(Tips)
