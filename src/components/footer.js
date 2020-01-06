import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      restaurant {
        info {
          data {
            address
            city
            country
            phone
            postal_code
            province
          }
        }
      }
    }
  `)

  const { address, city, country, phone, postal_code, province } = data.restaurant.info.data;

  return (
    <footer>
      <div>{`${address}, ${city}, ${province}, ${country} ${postal_code}`}</div>
      <div>Call us at: {phone}</div>
    </footer>
  );
}

export default Footer;