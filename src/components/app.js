import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import '../style/style.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-5 space-y-6 h-screen bg-red-500">
          <div class="flex-shrink-023">
            <img class="h-12 w-12 rounded-2xl" src="/sarah-dayan.jpg" alt="ChitChat Logo" />
          </div>
          <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </div>
    )
  }
}