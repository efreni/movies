import React from 'react'
import { Text, View, Linking } from 'react-native'
import Button from './Button'

const HeaderAwesomeContent = props => {
  const { headerTextStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={headerTextStyle}>{props.headerTextContent}</Text>
      <Button onPress={() => Linking.openURL('http://www.google.it')}>Favorities</Button>
    </View>
  )
}

const styles = {
  headerTextStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 70,
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
}

export default HeaderAwesomeContent
