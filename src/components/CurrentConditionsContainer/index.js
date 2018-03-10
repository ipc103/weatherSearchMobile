import React, { Component } from 'react'
import { View } from 'react-native'

import { fetchCurrentConditions } from '../../api/weatherUnderground'
import CurrentConditionsDetail from '../CurrentConditionsDetail'
import SearchForm from '../SearchForm'

class CurrentConditionsContainer extends Component {

  state = {
      city: '',
      region: '',
      conditions: {
        message: 'Enter a city and state abbreviation'
      }
    }

  handleQueryChange = (query) => {
    this.setState(query)
  }

  handleSearch = () => {
    fetchCurrentConditions(this.state.city, this.state.region)
      .then(this.parseWeather)
  }

  parseWeather = (data) => {
    if (data.current_observation) {
      this.setState({
        city: '',
        region: '',
        conditions: {
          temp: data.current_observation.temperature_string,
          weather: data.current_observation.weather.toLowerCase(),
          city: `${data.location.city}, ${data.location.state}`
        }
      })
    } else {
      this.setState({
        conditions: {
          message: 'No results found'
        }
      })
    }
  }

  render(){
    return(
      <View>
        <SearchForm handleQueryChange={this.handleQueryChange} city={this.state.city} region={this.state.region} handleSearch={this.handleSearch}/>
        <CurrentConditionsDetail conditions={this.state.conditions} />
      </View>
    )
  }
}

export default CurrentConditionsContainer
