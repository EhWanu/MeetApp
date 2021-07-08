import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventCount: 32,
  };

  // change number of events list
  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    if (eventCount < 1) {
      return this.setState({
        eventCount: "",
        errorText: 'Number of Events must me higher than 0',
      });
    } else {
      this.setState({
        eventCount,
        errorText: "",
      });
      // this.props.updateEvents('', eventCount);
    }
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <label>Number of Events</label>
        <input
          type='number'
          name='numberOfEvents'
          className='numberOfEventsInput'
          value={this.state.eventCount}
          onChange={this.handleEventInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;