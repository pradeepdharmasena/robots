import './App.css';
import { Component } from 'react';
import { CardListContainer } from './Components/CardListContainer/CardListContainer';
import { SearchBox } from './Components/SearchBox/SearchBox';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users.users }))
  }

  changeHandler =(e)=>{
    this.setState({ searchfield: e.target.value }, () => console.log(this.state))
  }
  render() {
    const { robots, searchfield } = this.state;
    const filterdRobots = robots.filter(robot => {
      const name = robot.firstName + " " + robot.lastName
      return (name.toLowerCase().includes(searchfield.toLocaleLowerCase()))
    })
    return (
      <div className="App">
        <SearchBox
          placeHolder = "search Robots"
          changeHandler={this.changeHandler}/>
        <CardListContainer robots={filterdRobots} />
      </div>
    );
  }

}

export default App;
