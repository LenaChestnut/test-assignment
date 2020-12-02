import React from 'react';
import PropTypes from 'prop-types';

function CardMessage(props) {
    const { isAvailable, isSelected, flavorName, flavorDescription } = props;

    let message;

    if (isAvailable && isSelected) {
        message = <p className="card-message">{flavorDescription}</p>;
    } else if (isAvailable && !isSelected) {
        message = (
            <p className="card-message">
                Чего сидишь? Порадуй котэ,{' '}
                <button type="button" className="purchase-button">
                    купи.
                </button>
            </p>
        );
    } else {
        message = (
            <p className="card-message card-message-disabled">Печалька, {flavorName} закончился.</p>
        );
    }

    return <div>{message}</div>;
}

CardMessage.propTypes = {
    isAvailable: PropTypes.bool,
    isSelected: PropTypes.bool,
    flavorName: PropTypes.string,
    flavorDescription: PropTypes.string,
};

export default CardMessage;
