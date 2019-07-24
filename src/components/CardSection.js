//is used in order to format and show a single card contet

import React from 'react'
import { View } from 'react-native'

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1, //needed to make a better mark on card bottom
    padding: 0,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#000',
    position: 'relative',
  },
}

export default CardSection
