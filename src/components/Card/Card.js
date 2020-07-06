import React, { Component, Fragment } from 'react';

class Card extends Component {
    render() {
        const { id, name, email } = this.props;
        const url = 'https://robohash.org/';
        const imgSize = '?200x200';

        return (
            <Fragment>
                <img src={url + id + imgSize} alt=""/>
                <div className="card_info">
                    <h2>{ name }</h2>
                    <p>{ email }</p>
                </div>
            </Fragment>
        );
    }
}

export default Card;