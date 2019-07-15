import React from 'react'
import { Text, View } from 'react-native'

const HeaderAwesomeContent = props => {
  const { headerTextStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={headerTextStyle}>{props.headerTextContent}</Text>
    </View>
  )
}

const styles = {
  headerTextStyle: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
}

export default HeaderAwesomeContent
