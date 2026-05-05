/*
 * @Author: czy0729
 * @Date: 2022-07-18 14:23:08
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-04 14:44:34
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'Zhinan')

export const TEXTS = {
  topic: {
    hd: '项目帖子 📋'
  },
  tips: {
    hd: '特色功能'
  },
  serverStatus: {
    hd: '网络探针 🌡︎'
  },
  github: {
    hd: 'Github ⭐️',
    information: '欢迎给星星、提需求、反馈问题，有求必应'
  },
  zhinan: {
    hd: '使用指南 🧭'
  },
  notion: {
    hd: '开发状况'
  },
  jihua: {
    hd: '开发计划问卷'
  },
  privacy: {
    hd: '隐私保护政策 🔒︎'
  }
} as const
