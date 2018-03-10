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
      title="Search for Weather"
      color="#841584"
      accessibilityLabel="Search for Weather"
    />
  </View>
)

export default SearchForm
