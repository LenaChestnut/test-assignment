import React from 'react';
import PropTypes from 'prop-types';

function CardMessage(props) {
    const { isAvailable, isSelected, flavorName, flavorDescription, selectProduct } = props;

    let message;

    if (isAvailable && isSelected) {
        message = <p className="message">{flavorDescription}</p>;
    } else if (isAvailable && !isSelected) {
        message = (
            <p className="message">
                Чего сидишь? Порадуй котэ,{' '}
                <button
                    type="button"
                    className="message__purchase-button"
                    onClick={() => selectProduct()}
                >
                    купи.
                </button>
            </p>
        );
    } else {
        message = <p className="message message_disabled">Печалька, {flavorName} закончился.</p>;
    }

    return <div>{message}</div>;
}

CardMessage.propTypes = {
    isAvailable: PropTypes.bool,
    isSelected: PropTypes.bool,
    flavorName: PropTypes.string,
    flavorDescription: PropTypes.string,
    selectProduct: PropTypes.func,
};

export default CardMessage;
