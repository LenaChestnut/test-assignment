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
                    flavorDescription={product.flavors['foie-gras'].flavorDescription}
                    weight={product.weight[0]}
                />
                <Card
                    flavorName={product.flavors.fish.flavorName}
                    flavorDescription={product.flavors.fish.flavorDescription}
                    weight={product.weight[1]}
                />
                <Card
                    flavorName={product.flavors.chicken.flavorName}
                    flavorDescription={product.flavors.chicken.flavorDescription}
                    weight={product.weight[2]}
                />
            </div>
        </div>
    );
}

export default App;
