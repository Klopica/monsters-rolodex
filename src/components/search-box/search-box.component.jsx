import './search-box.styles.css'

const SearchBox = ({ onChangeHandler, className, placeholder}) => (
  <input 
    className={`search-box ${className}` } 
    placeholder={placeholder} 
    type='search' 
    onChange={onChangeHandler} />
)


export default SearchBox