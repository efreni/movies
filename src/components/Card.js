//is used in order to show a format for every array

import React from 'react'
import { View } from 'react-native'

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = {
  containerStyle: {
    borderWith: 0.1,
    bordercolour: '#000',
    borderBottomWidth: 0,
    margin: 0,
  },
}

export default Card
