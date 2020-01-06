import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import MenuSection from './menuSection';

const Menu = (props) => {
  const data = useStaticQuery(graphql`
    query {
      restaurant {
        items {
          data {
            description
            name
            price
            section_id
          }
        }
        sections {
          data {
            id
            name
          }
        }
      }
    }
  `);

  return (
    <section>
      <h2>Menu</h2>
      { data.restaurant.sections.data.map(section => (
        <MenuSection
          name={section.name}
          key={section.id}
          items={data.restaurant.items.data.filter(item => item.section_id === section.id)}
        />
      )) }
    </section>
  );
};

export default Menu;