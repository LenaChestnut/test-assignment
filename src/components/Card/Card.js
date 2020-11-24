import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className="card">
            <div className="card-border">
                <div className="card-backdrop">
                    <div className="card-text">
                        <p className="card-text-description">
                            Сказочное заморское яство
                        </p>
                        <h2 className="card-text-title">Нямушка</h2>
                        <h3 className="card-text-flavor">с фуа-гра</h3>
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
                Чего сидишь? Порадуй котэ, <a href=".">купи.</a>
            </p>
        </div>
    );
}

export default Card;
