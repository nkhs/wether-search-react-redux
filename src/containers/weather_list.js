import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chat from '../components/chat'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData, index) {

        console.log(cityData)
        /*
        feels_like: 263.95
        humidity: 86
        pressure: 1027
        temp: 268.15
        temp_max: 268.15
        temp_min: 268.15
        */
        var test = []
        for (var i = 0; i < 50; i++) {
            test.push(i)
        }
        const temps = test.map(i => cityData.main.temp + Math.random() * i * 100)
        const humidity = test.map(i => cityData.main.humidity + Math.random() * i * 100)
        const pressure = test.map(i => cityData.main.pressure + Math.random() * i * 100)
        const { lat, lon } = cityData.coord;

        return (
            <tr key={index}>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>{cityData.name}</td>
                <td>
                    <Chat data={temps} color="orange" unit='K' />
                </td>
                <td>
                    <Chat data={pressure} color="green" unit='hPa' />
                </td>
                <td>
                    <Chat data={humidity} color="black" unit='%' />
                </td>

            </tr>
        )

    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Map</th>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);

