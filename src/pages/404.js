import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <Layout>
      <section className='page_404'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 '>
              <div className='col-sm-10 col-sm-offset-1  text-center'>
                <div className='four_zero_four_bg'>
                  <h1 className='text-center'>404</h1>
                </div>

                <div className='contant_box_404'>
                  <h3 className='h2'>Uh oh! Looks like you got lost!</h3>

                  <p>Go back to the homepage if your dare!</p>
                  <Link to='/' className='link_404'>
                    I DARE!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
