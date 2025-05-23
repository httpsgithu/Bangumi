/*
 * @Author: czy0729
 * @Date: 2024-03-03 07:03:57
 * @Last Modified by: czy0729
 * @Last Modified time: 2025-04-22 00:24:29
 */
import React from 'react'
import { View } from 'react-native'
import { Flex, Text } from '@components'
import { _ } from '@stores'
import { formatNumber, stl } from '@utils'
import { ob } from '@utils/decorators'
import { ColorValue, ViewStyle } from '@types'
import { COMPONENT } from './ds'
import { memoStyles } from './styles'

function Progress({
  style,
  size = 'md',
  assets,
  sacrifices
}: {
  style?: ViewStyle
  size?: 'md' | 'sm' | 'xs'
  assets: number
  sacrifices: number
}) {
  const styles = memoStyles()

  let barColor: ColorValue = _.colorSuccess
  let percent = 1
  if (assets === 0) {
    percent = 0.04
    barColor = _.colorDanger
  } else if (assets && sacrifices) {
    percent = Math.max(Math.min(assets / sacrifices, 1), 0.06)
    if (assets > sacrifices) {
      barColor = _.colorPrimary
    } else {
      if (sacrifices < 500 || assets < 250) {
        barColor = _.colorDisabled
      } else if (percent <= 0.3) {
        barColor = _.colorDanger
      } else if (percent <= 0.5) {
        barColor = _.colorWarning
      }
    }
  }

  let text = formatNumber(assets, 0)
  if (size === 'md' || assets !== sacrifices) text += ` / ${formatNumber(sacrifices, 0)}`

  let textSize = 12
  if (size === 'sm') {
    textSize = 9
  } else if (size === 'xs') {
    textSize = 8
  }

  return (
    <View style={stl(styles.progress, size === 'xs' && styles.progressXs, style)}>
      <View
        style={[
          styles.bar,
          size === 'xs' && styles.barXs,
          {
            width: `${percent * 100}%`,
            backgroundColor: barColor
          }
        ]}
      />
      <Flex style={styles.text} justify='center'>
        <Text
          type='__plain__'
          size={textSize}
          lineHeight={1}
          bold
          align={percent > 0.5 ? 'center' : 'left'}
          numberOfLines={1}
          shadow
        >
          {text}
        </Text>
      </Flex>
    </View>
  )
}

export default ob(Progress, COMPONENT)
