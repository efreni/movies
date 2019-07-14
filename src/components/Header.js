import React from 'react'
import { View } from 'react-native'
import HeaderAwesomeContent from './HeaderAwesomeContent'

const Header = () => {
  const { viewStyle } = styles
  return (
    <View style={viewStyle}>
      <HeaderAwesomeContent headerTextContent={'Movies'} />
    </View>
  )
}

//

const styles = {
  emptyViewStyle: {
    width: '30%',
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shoadowOpacity: 0.2,
    elevation: 4,
    position: 'relative',
  },
}

export default Header
