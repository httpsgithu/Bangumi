/*
 * @Author: czy0729
 * @Date: 2024-07-20 10:35:12
 * @Last Modified by: czy0729
 * @Last Modified time: 2024-11-16 11:42:24
 */
import { computed } from 'mobx'
import { collectionStore, otaStore, systemStore } from '@stores'
import { ADVANCE_LIMIT } from '../ds'
import State from './state'

export default class Computed extends State {
  /** 是否列表布局 */
  @computed get isList() {
    return this.state.layout === 'list'
  }

  /** 对应项搜索后总数 */
  @computed get total() {
    return this.state.data.list.length
  }

  /** 对应项实际显示列表 */
  @computed get list() {
    const { data, query } = this.state
    let { list } = data

    if (query.collected === '隐藏') {
      list = list.filter(item => {
        const subjectId = otaStore.nsfwSubjectId(item)
        return !collectionStore.collect(subjectId)
      })
    }

    if (!systemStore.advance) {
      list = list.filter((_item, index) => index < ADVANCE_LIMIT)
    }

    return list
  }
}
