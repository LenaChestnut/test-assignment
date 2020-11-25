import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {
    const { name, tagline, flavorName, flavorDescription } = props;

    return (
        <div className="card">
            <div className="card-border">
                <div className="card-backdrop">
                    <div className="card-text">
                        <p className="card-text-description">{tagline}</p>
                        <h2 className="card-text-title">{name}</h2>
                        <h3 className="card-text-flavor">{flavorName}</h3>
                        <div className="card-text-purchase-info">
                            <p>
                                <span className="info-servings">10</span> порций
                            </p>
                            <p>мышь в подарок</p>
                        </div>
                    </div>
                    <div className="weight-label">
                        <p className="weight-label-amount">0,5</p>
                        <p className="weight-label-unit">кг</p>
                    </div>
                </div>
            </div>
            <p className="card-message">
                {/* Чего сидишь? Порадуй котэ, <a href=".">купи.</a> */}
                {flavorDescription}
            </p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    tagline: PropTypes.string,
    flavorName: PropTypes.string,
    flavorDescription: PropTypes.string,
};

Card.defaultProps = {
    name: 'Нямушка',
    tagline: 'Сказочное заморское яство',
    flavorName: 'с фуа-гра',
    flavorDescription: 'Печень утки разварная с артишоками.',
};

export default Card;
