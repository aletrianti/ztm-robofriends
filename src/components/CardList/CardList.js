import React, { Component, Fragment } from 'react';
import Card from '../Card/Card';

import './CardList.scss';

class CardList extends Component {
    render() {
        const { robots } = this.props;

        const card = robots.map((robot, i) => {
            return (<Card 
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />);
        });
        return (
            <div id="cards-list">
                { card }
            </div>
        );
    }
}

export default CardList;