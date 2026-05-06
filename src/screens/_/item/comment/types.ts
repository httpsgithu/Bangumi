/*
 * @Author: czy0729
 * @Date: 2022-06-17 12:46:26
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-05 20:32:51
 */
import type { CollectionStatusCn, EventType, Fn, SubjectId, UserId, WithViewStyles } from '@types'

export type Props = WithViewStyles<{
  time?: string
  avatar?: string
  userId?: UserId
  userName?: string
  star?: string | number
  status?: CollectionStatusCn
  comment?: string
  subjectId?: SubjectId
  relatedId?: string | number
  action?: string
  mainId?: string
  mainName?: string
  event?: EventType
  popoverData?: string[] | readonly string[]

  /** 是否追踪 */
  like?: boolean
  onSelect?: Fn
}>
