/*
 * @Author: czy0729
 * @Date: 2023-04-04 21:25:14
 * @Last Modified by: czy0729
 * @Last Modified time: 2023-12-04 22:18:17
 */
import React from 'react'
import { View } from 'react-native'
import { stl } from '@utils'
import { Component } from '../../component'
import { Flex } from '../../flex'
import { styles } from './styles'
import { Props as StorybookPageProps } from './types'

/** [WEB] 单页面页面容器 */
export const StorybookPage = ({
  style,
  container,
  wind,
  space,
  radius,
  children,
  ...other
}: StorybookPageProps) => {
  return (
    <Component id='component-storybook-page'>
      <Flex
        style={stl(
          styles.view,
          container && styles.container,
          wind && styles.wind,
          space && styles.space,
          style
        )}
        justify='center'
        {...other}
      >
        {radius ? <View style={styles.radius}>{children}</View> : children}
      </Flex>
    </Component>
  )
}