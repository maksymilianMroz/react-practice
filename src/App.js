import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Tommy', age: 22 },
      { name: 'Wanda', age: 2622 }
    ],
    otherState: 'some other value',
    userName: 'TEXT TO EDIT',
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 26 },
        { name: event.target.value, age: 22 },
        { name: 'Wanda', age: 33 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      fontWeight: 'bold',
      color: 'white',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={this.nameChangeHandler} />
          })}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>This is my REACT.js APP</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>  Toggle Persons </button>

        {persons}

        {/* <UserOutput
          userName={this.state.userName}
        />
        <UserInput
          changed={this.userNameChangeHandler}
          currentName={this.state.userName} /> */}
      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello'))

  }
}

export default App;
