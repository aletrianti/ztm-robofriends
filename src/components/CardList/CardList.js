import React, { Component, Fragment } from 'react';
import Card from '../Card/Card';

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
            <Fragment>
                { card }
            </Fragment>
        );
    }
}

export default CardList;