import './App.css';
import { Component } from 'react';
import { CardListContainer } from './Components/CardListContainer/CardListContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monstors: [

      ],
      robots: [

      ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monstors: users }))

    fetch("https://dummyjson.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users.users }))
  }
  render() {
    return (
      <div className="App">

        <CardListContainer robots={this.state.robots} />
      </div>
    );
  }

}

export default App;
