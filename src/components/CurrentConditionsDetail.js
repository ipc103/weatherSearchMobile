import React from 'react'
import { View, Text } from 'react-native'

const CurrentConditionsDetail = ({conditions}) => {
  const { city, weather, temp, message } = conditions

  if ( message ) {
    return (
      <View>
        <Text>
          {message}
          </Text>
      </View>
    )
  }

  return (
    <View>
      <Text>City: {city}, Weather: {weather}, Temp: {temp}</Text>
    </View>
  )
}

CurrentConditionsDetail.defaultProps = {
  conditions: {
    message: 'No weather info found'
  }
}

export default CurrentConditionsDetail
