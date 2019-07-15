import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, title }) => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}> {title} </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    width: 100,
    height: 60,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    paddingTop: 18,
    paddingBottom: 15,
    elevation: 1,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#0074D9',
    fontSize: 17,
  },
}

export default Button
