import React from 'react';

export default function Item({ restaurant: { id, name, category, address }}) {
    return (
        <li>
            {name} | {category} | {address}
        </li>
    );
}
