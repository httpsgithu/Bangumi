/*
 * @Author: czy0729
 * @Date: 2024-01-21 07:33:51
 * @Last Modified by: czy0729
 * @Last Modified time: 2024-12-12 05:06:38
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'Header')

export const HM = ['userSetting', 'UserSetting'] as const
