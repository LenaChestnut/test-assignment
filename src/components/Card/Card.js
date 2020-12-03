import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardMessage from './CardMessage/CardMessage';
import { getServingsAmount, getGiftMessage } from '../utils';

function Card(props) {
    const [isSelected, setIsSelected] = useState(false);
    const { name, tagline, flavorName, flavorDescription, isAvailable, weight } = props;

    const servings = getServingsAmount(weight);

    const gift = getGiftMessage(weight);

    function selectProduct() {
        setIsSelected(!isSelected);
    }

    let cardClass = 'card';

    if (isAvailable && !isSelected) {
        cardClass += ' card_default';
    } else if (!isAvailable) {
        cardClass += ' card_disabled';
    } else if (isSelected) {
        cardClass += ' card_selected';
    }

    return (
        <div className={cardClass}>
            <div className="card__border" onClick={isAvailable ? () => selectProduct() : null}>
                <div className="card__backdrop">
                    <div className="card__text">
                        <p className="card__tagline">{tagline}</p>
                        <h2 className="card__title">{name}</h2>
                        <h3 className="card__flavor">{flavorName}</h3>
                        <div className="card__purchase-info">
                            <p>
                                <span className="card__servings-info">{servings}</span> порций
                            </p>
                            {gift}
                            {servings >= 100 ? <p>заказчик доволен</p> : null}
                        </div>
                    </div>
                    <div className="card__weight-label">
                        <p className="card__amount">{`${weight}`.replace('.', ',')}</p>
                        <p className="card__unit">кг</p>
                    </div>
                </div>
            </div>
            <CardMessage
                isAvailable={isAvailable}
                isSelected={isSelected}
                flavorName={flavorName}
                flavorDescription={flavorDescription}
                selectProduct={selectProduct}
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
