/*
 * @Author: czy0729
 * @Date: 2025-07-27 04:54:53
 * @Last Modified by: czy0729
 * @Last Modified time: 2025-07-29 16:40:45
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'Header')

export const HM = ['tinygrail/top-week', 'TopWeek'] as const
