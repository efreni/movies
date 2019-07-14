import React from 'react'
import { View } from 'react-native'

const HeaderHandler = props => {
  const { containerStyle } = styles
  return <View style={containerStyle}>{props.children}</View>
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
}
export default HeaderHandler
