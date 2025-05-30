/*
 * @Author: czy0729
 * @Date: 2022-03-15 22:57:56
 * @Last Modified by: czy0729
 * @Last Modified time: 2024-11-18 02:12:30
 */
import React from 'react'
import { HeaderV2, HeaderV2Popover } from '@components'
import { useStore } from '@stores'
import { open } from '@utils'
import { ob } from '@utils/decorators'
import { TEXT_MENU_BROWSER } from '@constants'
import { Ctx } from '../types'
import { COMPONENT, DATA } from './ds'

function Header() {
  const { $ } = useStore<Ctx>()
  return (
    <HeaderV2
      title={$.params?.name ? `${$.params.name}的影评` : '影评'}
      alias='影评'
      hm={$.hm}
      headerRight={() => (
        <HeaderV2Popover
          data={DATA}
          onSelect={title => {
            if (title === TEXT_MENU_BROWSER) {
              open($.url)
            }
          }}
        />
      )}
    />
  )
}

export default ob(Header, COMPONENT)
