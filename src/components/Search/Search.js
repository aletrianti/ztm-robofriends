import React, { Component, Fragment } from 'react';

class Search extends Component {
    render() {
        const { searchField, searchChange } = this.props;

        return (
            <Fragment>
                <input 
                    className="search_input"
                    type="text" 
                    placeholder="Search robots..."
                    onChange={searchChange}
                />
            </Fragment>
        );
    }
}

export default Search;