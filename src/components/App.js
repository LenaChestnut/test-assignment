import React from 'react';
import Header from './Header/Header';
import './App.css';
import Card from './Card/Card';
import product from '../data/products.json';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="cards-display">
                <Card
                    flavorName={product.flavors['foie-gras'].flavorName}
                    flavorDescription={
                        product.flavors['foie-gras'].flavorDescription
                    }
                    weight={product.weight[0]}
                />
            </div>
        </div>
    );
}

export default App;
