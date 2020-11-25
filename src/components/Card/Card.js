import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {
    const { name, tagline, flavorName, flavorDescription, weight } = props;

    const servings = weight / 0.05;

    let gift;

    if (weight === 0.5) {
        gift = <p>мышь в подарок</p>;
    } else if (weight === 2) {
        gift = (
            <p>
                <span className="info-gift">2</span> мыши в подарок
            </p>
        );
    } else {
        gift = (
            <p>
                <span className="info-gift">5</span> мышей в подарок
            </p>
        );
    }

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
                                <span className="info-servings">{servings}</span> порций
                            </p>
                            {gift}
                            {servings >= 100 ? <p>заказчик доволен</p> : null}
                        </div>
                    </div>
                    <div className="weight-label">
                        <p className="weight-label-amount">{`${weight}`.replace('.', ',')}</p>
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
    weight: PropTypes.number,
};

Card.defaultProps = {
    name: 'Нямушка',
    tagline: 'Сказочное заморское яство',
    flavorName: 'с фуа-гра',
    flavorDescription: 'Печень утки разварная с артишоками.',
    weight: 0.5,
};

export default Card;
