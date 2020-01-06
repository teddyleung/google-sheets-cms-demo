import React from 'react';
import MenuItem from './menuItem';

const MenuSection = ({ name, items }) => (
  <section>
    <h3>{name}</h3>
    { items.map((item, i) => (
      <MenuItem item={item} key={i} />
    )) }
  </section>
);

export default MenuSection;