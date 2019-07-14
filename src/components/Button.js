import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    backgroundColor: '#F8F8F8',
    paddingTop: 5,
    paddingBottom: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#0074D9',
    fontSize: 17,
  },
}

export default Button
