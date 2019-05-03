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
    userName: 'TEXT TO EDIT'
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
          onClick={() => this.switchNameHandler('Maksymilian')}>  Switch Name </button>




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
        
        

        <UserOutput
          userName={this.state.userName}
        />
        <UserInput
          changed={this.userNameChangeHandler} 
          currentName={this.state.userName}/>

      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello'))

  }
}

export default App;
