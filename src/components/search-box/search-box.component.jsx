import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const {onChangeHandler} = this.props
    return (
      <input 
        className={`search-box ${this.props.className}` } 
        placeholder={this.props.placeholder} 
        type='search' 
        onChange={onChangeHandler} />
    )
  }
}

export default SearchBox