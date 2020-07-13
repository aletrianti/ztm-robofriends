import React, { Component } from 'react';

import './Search.scss';

class Search extends Component {
    render() {
        const { searchChange } = this.props;

        return (
            <div>
                <input 
                    id="search_input"
                    type="text" 
                    placeholder="Search robots..."
                    onChange={searchChange}
                />
            </div>
        );
    }
}

export default Search;