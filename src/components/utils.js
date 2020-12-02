import React from 'react';

function getServingsAmount(weight) {
    return weight / 0.05;
}

function getGiftMessage(weight) {
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

    return gift;
}

export { getServingsAmount, getGiftMessage };
