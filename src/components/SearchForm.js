import React from 'react'
import { View, Text, TextInput, Button} from 'react-native'

const SearchForm = ({city, region, handleQueryChange, handleSearch}) => (
  <View>
    <Text>Enter City</Text>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={city}
      onChangeText={ text => handleQueryChange({city: text}) }
    />
    <Text>Enter State</Text>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={region}
      onChangeText={ text => handleQueryChange({region: text}) }
    />
    <Button
      onPress={handleSearch}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
)

export default SearchForm
