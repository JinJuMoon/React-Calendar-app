import React, {Component} from 'react';
import axios from 'axios';
import Calendar from './Calendar/Calendar'
import './App.css';

class App extends Component {

  state = {
    calendar: ""
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({calendar: res}))
    .catch(err => console.log(err))
  }


  callApi = async () => {
    const response = await axios.get('/api/calendar');
    return response.data;
  }

  render() {
    return (
      <Calendar calendar={this.state.calendar? this.state.calendar : ""} />
    );
  }
}

export default App;