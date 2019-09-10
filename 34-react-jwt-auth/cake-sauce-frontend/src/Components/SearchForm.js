import React from 'react'

class SearchForm extends React.Component {
  render() {
    return (
      <div className={'center'}>
        <h3>Search Form:</h3>
        <input 
          className={'center'}
          type="text" 
          name="search" 
          placeholder="search for member" 
          value={this.props.value} 
          onChange={(e) => this.props.changeHandler(e.target.value)} 
        />
      </div>
    )
  }
}

export default SearchForm