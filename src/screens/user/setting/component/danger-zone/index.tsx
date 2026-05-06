/*
 * @Author: czy0729
 * @Date: 2022-01-22 18:08:53
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-06 00:25:46
 */
import React from 'react'
import { observer } from 'mobx-react'
import { ActionSheet, Heatmap, Text } from '@components'
import { ItemSetting } from '@_'
import { r } from '@utils/dev'
import { useBoolean } from '@utils/hooks'
import { WEB } from '@constants'
import { getShows } from '../../utils'
import Email from './email'
import Logout from './logout'
import NetworkServices from './network-services'
import Password from './password'
import Privacy from './privacy'
import Settings from './settings'
import { COMPONENT, TEXTS } from './ds'

import type { WithNavigation } from '@types'
import type { WithFilterProps } from '../../types'

/** 谨慎操作 */
function DangerZone({ navigation, filter }: WithNavigation<WithFilterProps>) {
  r(COMPONENT)

  const { state, setTrue, setFalse } = useBoolean(false)
  const shows = getShows(filter, TEXTS)

  if (WEB || !shows) return null

  return (
    <>
      <ItemSetting
        show={shows.logout}
        arrow
        highlight
        filter={filter}
        onPress={setTrue}
        {...TEXTS.dangerZone}
        hd={
          <Text type='danger' size={WEB ? 13 : 14} bold>
            {TEXTS.dangerZone.hd}
          </Text>
        }
      >
        <Heatmap id='设置.退出登陆' />
      </ItemSetting>
      <ActionSheet show={state} title={TEXTS.dangerZone.hd} height={680} onClose={setFalse}>
        {shows.logout && <Logout navigation={navigation} filter={filter} setFalse={setFalse} />}
        {shows.settings && <Settings filter={filter} />}
        {shows.networdServices && <NetworkServices filter={filter} />}
        {shows.privacy && <Privacy filter={filter} />}
        {shows.password && <Password filter={filter} />}
        {shows.email && <Email filter={filter} />}
      </ActionSheet>
    </>
  )
}

export default observer(DangerZone)
