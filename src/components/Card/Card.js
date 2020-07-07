import React, { Component, Fragment } from 'react';

import './Card.scss';

class Card extends Component {
    render() {
        const { id, name, email } = this.props;
        const url = 'https://robohash.org/';
        const imgSize = '?200x200';

        return (
            <div className="card">
                <img src={url + id + imgSize} alt=""/>
                <div className="card_info">
                    <h2>{ name }</h2>
                    <p>{ email }</p>
                </div>
            </div>
        );
    }
}

export default Card;