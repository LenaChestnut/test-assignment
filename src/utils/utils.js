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
                <span className="card__gift-info">2</span> мыши в подарок
            </p>
        );
    } else {
        gift = (
            <p>
                <span className="card__gift-info">5</span> мышей в подарок
            </p>
        );
    }

    return gift;
}

function getCardClasses(available, selected, stateChanged) {
    let newClass;

    if (available && !selected) {
        newClass = stateChanged ? 'card_default_initial' : 'card_default';
    } else if (selected) {
        newClass = stateChanged ? 'card_selected_initial' : 'card_selected';
    } else if (!available) {
        newClass = 'card_disabled';
    }

    return ['card', newClass];
}

export { getServingsAmount, getGiftMessage, getCardClasses };
