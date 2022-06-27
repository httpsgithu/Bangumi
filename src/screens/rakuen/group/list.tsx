/*
 * @Author: czy0729
 * @Date: 2019-07-12 22:44:24
 * @Last Modified by: czy0729
 * @Last Modified time: 2022-06-25 19:10:04
 */
import React from 'react'
import { View } from 'react-native'
import { Touchable, Flex, Text, Mesume, Heatmap } from '@components'
import { Avatar } from '@_'
import { _ } from '@stores'
import { open } from '@utils'
import { appNavigate, correctAgo } from '@utils/app'
import { obc } from '@utils/decorators'
import { info } from '@utils/ui'
import { HTMLDecode } from '@utils/html'
import { t } from '@utils/fetch'
import { API_AVATAR, HOST, LIMIT_TOPIC_PUSH } from '@constants'

function List({ style }, { $, navigation }) {
  const styles = memoStyles()
  const { title: group } = $.groupInfo
  const { list, _loaded } = $.group
  if (_loaded && !list.length) {
    return (
      <Flex style={styles.empty} direction='column' justify='center'>
        <Mesume />
        <Text style={_.mt.sm} type='sub'>
          好像什么都没有
        </Text>
      </Flex>
    )
  }

  return (
    <View style={style}>
      {list.map(({ title, href, replies, time, userName, userId }, index) => {
        const topicId = href.replace('/group/topic/', 'group/')
        const readed = $.readed(topicId)
        const isReaded = !!readed.time

        // 处理 (+30) +10 样式
        const replyText = `+${replies}`
        let replyAdd
        if (isReaded) {
          if (replies > readed.replies) {
            replyAdd = `+${replies - readed.replies}`
          }
        }
        return (
          <Touchable
            key={href}
            style={[styles.item, isReaded && styles.readed]}
            onPress={() => {
              if (replies > LIMIT_TOPIC_PUSH) {
                const url = `${HOST}${href}`
                t('小组.跳转', {
                  to: 'WebBrowser',
                  url
                })

                info('该帖评论多, 自动使用浏览器打开')
                setTimeout(() => {
                  open(url)
                }, 1500)
              } else {
                // 记录帖子查看历史详情
                $.onItemPress(topicId, replies)
                appNavigate(
                  href,
                  navigation,
                  {
                    _title: title,
                    _replies: `+${replies}`,
                    _group: group,
                    _time: time
                  },
                  {
                    id: '小组.跳转'
                  }
                )
              }
            }}
          >
            <View style={[styles.wrap, !!index && !_.flat && styles.border]}>
              <Text size={15}>
                {HTMLDecode(title)}
                <Text type={isReaded ? 'sub' : 'main'} size={12} lineHeight={15}>
                  {' '}
                  {replyText}
                </Text>
                {!!replyAdd && (
                  <Text type='main' size={12} lineHeight={15}>
                    {' '}
                    {replyAdd}
                  </Text>
                )}
              </Text>
              <Flex style={_.mt.sm}>
                <Avatar
                  navigation={navigation}
                  size={18}
                  src={API_AVATAR(userId)}
                  userId={userId}
                />
                <Text style={_.ml.sm} size={12} bold>
                  {userName}
                </Text>
                <Text style={_.ml.xs} type='sub' size={12}>
                  {correctAgo(time)}
                </Text>
              </Flex>
            </View>
            {!index && <Heatmap id='小组.跳转' />}
          </Touchable>
        )
      })}
    </View>
  )
}

export default obc(List)

const memoStyles = _.memoStyles(() => ({
  item: {
    paddingLeft: _.wind - _._wind + _.md
  },
  wrap: {
    paddingVertical: _.md,
    paddingRight: _.wind
  },
  border: {
    borderTopColor: _.colorBorder,
    borderTopWidth: _.hairlineWidth
  },
  readed: {
    backgroundColor: _.colorBg
  },
  empty: {
    minHeight: 240
  }
}))