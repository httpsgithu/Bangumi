/*
 * @Author: czy0729
 * @Date: 2022-10-19 13:15:42
 * @Last Modified by:   czy0729
 * @Last Modified time: 2022-10-19 13:15:42
 */
export type Props = {
  /** 是否显示 */
  show?: boolean

  /** 高度，不会超过屏幕高度的88% */
  height?: number

  /** 关闭回调函数 */
  onClose?: () => any

  /** 内容 */
  children: any
}