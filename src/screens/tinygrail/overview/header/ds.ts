/*
 * @Author: czy0729
 * @Date: 2024-03-02 04:40:53
 * @Last Modified by: czy0729
 * @Last Modified time: 2024-03-02 04:53:57
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'Header')

export const HM = ['tinygrail/overview', 'TinygrailOverview'] as const
