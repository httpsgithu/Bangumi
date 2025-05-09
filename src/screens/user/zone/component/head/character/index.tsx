/*
 * @Author: czy0729
 * @Date: 2023-06-28 09:01:22
 * @Last Modified by: czy0729
 * @Last Modified time: 2024-11-18 08:03:10
 */
import React from 'react'
import { View } from 'react-native'
import { Heatmap, Text, Touchable } from '@components'
import { _, useStore } from '@stores'
import { ob } from '@utils/decorators'
import { t } from '@utils/fetch'
import { Ctx } from '../../../types'

function Character({ style }) {
  const { $, navigation } = useStore<Ctx>()
  return (
    <View style={style}>
      <Touchable
        animate
        scale={0.8}
        onPress={() => {
          t('空间.跳转', {
            userId: $.userId,
            to: 'Character'
          })

          navigation.push('Character', {
            userName: $.userId
          })
        }}
      >
        <Text type={_.select('plain', 'title')} size={11} bold shadow noWrap>
          人物
        </Text>
      </Touchable>
      <Heatmap right={-84} bottom={-8} id='空间.跳转' to='Character' alias='人物' />
    </View>
  )
}

export default ob(Character)
