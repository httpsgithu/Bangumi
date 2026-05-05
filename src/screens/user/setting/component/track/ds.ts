/*
 * @Author: czy0729
 * @Date: 2023-02-14 03:18:33
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-05 21:48:29
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'Blocks')

export const TEXTS = {
  track: {
    hd: '追踪'
  },
  comment: {
    hd: '追踪 TA 的评论 (条目)',
    information: '每次首次进入条目页，会对追踪的用户批量发请求，若有数据会在吐槽顶部显示对应评论'
  }
} as const
