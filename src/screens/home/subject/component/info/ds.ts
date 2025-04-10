/*
 * @Author: czy0729
 * @Date: 2022-08-26 00:59:30
 * @Last Modified by: czy0729
 * @Last Modified time: 2024-11-08 05:45:51
 */
import { systemStore } from '@stores'
import { rc } from '@utils/dev'
import { FROZEN_FN } from '@constants'
import { Navigation } from '@types'
import { StoreType as $ } from '../../types'
import { COMPONENT as PARENT } from '../ds'
import { memoStyles } from './styles'

export const COMPONENT = rc(PARENT, 'Info')

export const COMPONENT_MAIN = rc(COMPONENT)

export const DEFAULT_PROPS = {
  navigation: {} as Navigation,
  styles: {} as ReturnType<typeof memoStyles>,
  subjectId: 0 as $['subjectId'],
  showInfo: true as typeof systemStore.setting.showInfo,
  info: '' as $['info'],
  name: '',
  onSwitchBlock: FROZEN_FN as $['onSwitchBlock']
}
