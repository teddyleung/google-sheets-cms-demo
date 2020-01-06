import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query {
    restaurant {
      info {
        data {
          address
          city
          country
          name
          phone
          postal_code
          province
        }
      }
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
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
};

export default IndexPage;
