import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardMessage from './CardMessage/CardMessage';
import { getServingsAmount, getGiftMessage } from '../utils';

function Card(props) {
    const { name, tagline, flavorName, flavorDescription, isAvailable, weight } = props;
    const { isSelected, setIsSelected } = useState(false);

    const servings = getServingsAmount(weight);

    const gift = getGiftMessage(weight);

    return (
        <div className={isAvailable ? 'card' : 'card card-disabled'}>
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
            <CardMessage
                isAvailable={isAvailable}
                isSelected={isSelected}
                flavorName={flavorName}
                flavorDescription={flavorDescription}
            />
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    tagline: PropTypes.string,
    flavorName: PropTypes.string,
    flavorDescription: PropTypes.string,
    weight: PropTypes.number,
    isAvailable: PropTypes.bool,
};

Card.defaultProps = {
    name: 'Нямушка',
    tagline: 'Сказочное заморское яство',
    flavorName: 'с фуа-гра',
    flavorDescription: 'Печень утки разварная с артишоками.',
    weight: 0.5,
    isAvailable: true,
};

export default Card;
