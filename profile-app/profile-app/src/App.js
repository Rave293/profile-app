
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A software engineer with a passion for learning.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      show: false,
      intervalId: null,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
    this.setState({ intervalId });
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <div className="timer">
          <p>Time since mounted: {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;

