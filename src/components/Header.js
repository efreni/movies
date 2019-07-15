import React from 'react'
import { View } from 'react-native'
import HeaderAwesomeContent from './HeaderAwesomeContent'

const Header = props => {
  const { viewStyle } = styles
  return (
    <View style={viewStyle}>
      <HeaderAwesomeContent headerTextContent={props.headerText} />
    </View>
  )
}

//

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shoadowOpacity: 0.2,
    elevation: 1,
  },
}

export default Header
