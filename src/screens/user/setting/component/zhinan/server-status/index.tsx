/*
 * @Author: czy0729
 * @Date: 2024-04-25 04:15:22
 * @Last Modified by: czy0729
 * @Last Modified time: 2024-07-10 10:10:05
 */
import React from 'react'
import { useObserver } from 'mobx-react'
import { Heatmap } from '@components'
import { ItemSetting } from '@_'
import { t } from '@utils/fetch'
import { TEXTS } from '../ds'

/** 网络探针 */
function ServerStatus({ navigation, filter }) {
  return useObserver(() => (
    <ItemSetting
      arrow
      highlight
      filter={filter}
      onPress={() => {
        navigation.push('ServerStatus')

        t('设置.跳转', {
          title: '网络探针',
          to: 'ServerStatus'
        })
      }}
      {...TEXTS.serverStatus}
    >
      <Heatmap id='设置.跳转' to='ServerStatus' alias='网络探针' />
    </ItemSetting>
  ))
}

export default ServerStatus
