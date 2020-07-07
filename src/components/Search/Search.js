import React, { Component, Fragment } from 'react';

import './Search.scss';

class Search extends Component {
    render() {
        const { searchField, searchChange } = this.props;

        return (
            <Fragment>
                <input 
                    id="search_input"
                    type="text" 
                    placeholder="Search robots..."
                    onChange={searchChange}
                />
            </Fragment>
        );
    }
}

export default Search;