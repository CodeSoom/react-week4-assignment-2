import React from 'react';

import Item from './Item';

export default function List({ restaurants }) {
    if (restaurants.length === 0) {
        return (
            <p></p>
        );
    }

    return (
        <ol>
            {restaurants.map((restaurant) => (
                <Item key={restaurant.id} restaurant={restaurant} />
            ))}
        </ol>
    );
}
