import React from 'react'

class SearchForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Search Form:</h3>
                <input type="text" name="search" placeholder="search for member" value={this.props.value} onChange={(e) => this.props.changeHandler(e.target.value)} />
            </div>

        )
    }
}

export default SearchForm