/*
 * @Author: czy0729
 * @Date: 2026-05-04 14:22:14
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-04 14:25:30
 */
import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import { HeaderV2 } from '@components'
import i18n from '@constants/i18n'
import Status from '../component/status'
import { HM } from './ds'

import type { WithNavigation } from '@types'

function Header({ navigation }: WithNavigation) {
  const handleHeaderRight = useCallback(() => <Status navigation={navigation} />, [navigation])

  return <HeaderV2 title={i18n.setting()} alias='设置' hm={HM} headerRight={handleHeaderRight} />
}

export default observer(Header)
