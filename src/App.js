import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

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

  switchNameHandler = (newName) => {
    // console.log('HEJA!');
    // DONT DO THIS!! = this.state.persons[0].name = 'MAKSYMILIAN';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Tommy', age: 22 },
        { name: 'Wanda', age: 33 }
      ]
    })
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

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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



    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>This is my REACT.js APP</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>  Toggle Persons </button>

        {
          this.state.showPersons === true ?
            <div >

              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />

              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Maksym!')}
                changed={this.nameChangeHandler}
              >
                My hobbies: Racing
              </Person>

              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />

            </div> : null
        }






        <UserOutput
          userName={this.state.userName}
        />
        <UserInput
          changed={this.userNameChangeHandler}
          currentName={this.state.userName} />

      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello'))

  }
}

export default App;
