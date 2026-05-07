/*
 * @Author: czy0729
 * @Date: 2019-04-13 10:38:19
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-01-23 05:32:26
 */
import React from 'react'
import { WebView as RNWebView } from 'react-native-webview'
import { r } from '@utils/dev'
import { FROZEN_FN } from '@constants'
import { KeyboardSpacer } from '../keyboard-spacer'
import { COMPONENT } from './ds'

/** @deprecated 通用内置浏览器 */
export const WebView = class WebViewComponent extends React.Component<any> {
  ref: any

  stopLoading = FROZEN_FN

  reload = FROZEN_FN

  goBack = FROZEN_FN

  messageToken = Math.random().toString(36).slice(2, 10)

  injectedTokenScript = `(function(){
    var __token='${this.messageToken}';
    var __orig=window.ReactNativeWebView&&window.ReactNativeWebView.postMessage;
    if(__orig){
      window.ReactNativeWebView.postMessage=function(msg){
        try{
          var o=typeof msg==='string'?JSON.parse(msg):msg;
          o.token=__token;
          __orig(JSON.stringify(o));
        }catch(e){__orig(msg)}
      };
    }
  })();`

  onMessage = (event: any) => {
    const { onMessage } = this.props
    if (!onMessage) return

    try {
      const { token } = JSON.parse(event.nativeEvent.data)
      if (token !== this.messageToken) return
      onMessage(event)
    } catch (ex) {}
  }

  render() {
    r(COMPONENT)

    const { uri, onMessage, injectedJavaScriptBeforeContentLoaded, ...other } = this.props as any
    if (!uri) return null

    return (
      <>
        <RNWebView
          ref={ref => {
            if (ref) {
              this.stopLoading = ref.stopLoading
              this.reload = ref.reload
              this.goBack = ref.goBack
            }
          }}
          useWebKit
          thirdPartyCookiesEnabled={false}
          source={{ uri }}
          injectedJavaScriptBeforeContentLoaded={`${this.injectedTokenScript}${injectedJavaScriptBeforeContentLoaded || ''}`}
          onMessage={this.onMessage}
          {...other}
        />
        <KeyboardSpacer />
      </>
    )
  }
}

export default WebView
