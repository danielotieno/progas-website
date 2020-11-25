import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <Layout>
      <h1 className='error-h1 text-center mt-5 pt-5'>404: Page Not Found</h1>
      <h3 className='text-center mt-5 mb-5'>
        <Link to='/index.js/'>Go to HomePage</Link>
      </h3>
    </Layout>
  );
};

export default NotFound;
