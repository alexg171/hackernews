import React, {Component} from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

const array = [1,4,9,16];

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const element = <h1>Hello, world!</h1>
    const user = {
      firstName: 'Harper',
      lastname: 'Perez'
    };
    return (
      <div className="App">
        {list.map(function(item) {
          return <div>{item.title}</div>;
        })}
      </div>
    );
  }
  
}

export default App;
