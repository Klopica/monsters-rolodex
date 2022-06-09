import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
// import './components/search-box/search-box.styles.css'
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    // console.log('constructor')
  }
  
  componentDidMount() {
    // console.log('componentDidMount')

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
        return {monsters: users}
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    // console.log('render')

    const {monsters, searchField} = this.state
    const {onSearchChange} = this

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="Search monsters..." className="monsters-search-box"/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
