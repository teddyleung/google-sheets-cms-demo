import React from 'react';

const MenuItem = ({ item: { name, description, price } }) => (
  <div>
    <h4>{name}</h4>
    <p>{description}</p>
    <div>{price}</div>
  </div>
);

export default MenuItem;