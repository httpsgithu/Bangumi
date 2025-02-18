/*
 * @Author: czy0729
 * @Date: 2023-05-13 04:45:19
 * @Last Modified by: czy0729
 * @Last Modified time: 2023-12-31 11:18:37
 */
import React from 'react'
import { ToolBar } from '@components'
import { _, useStore } from '@stores'
import { ob } from '@utils/decorators'
import { Ctx } from '../../types'

function Pagination({ pageCurrent, pageTotal }) {
  const { $ } = useStore<Ctx>()
  return (
    <ToolBar.Popover
      data={generateArray(pageTotal)}
      icon='md-notes'
      iconColor={_.colorDesc}
      text={pageCurrent}
      type='desc'
      onSelect={title => $.onPage(title)}
    />
  )
}

export default ob(Pagination)

function generateArray(num: number) {
  const arr = []
  for (let i = 1; i <= Number(num); i += 1) {
    arr.push(String(i))
  }
  return arr
}
