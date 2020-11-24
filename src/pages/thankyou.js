import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Layout from '../components/Layout';
import Bike from '../images/bike1.png';
import SEO from '../components/SEO.js';


export default function SellProgasThankYouPage() {
  return (
    <Layout>
    <SEO
        title='ProGas Thank You'
        description='Thank you page. It shows successful filling of Sell ProGas-form.'
      />
      <Container className="get-form">
        <Row className="section-heading">
          <Col>
            <h1>Become a Pro</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <h4 className="thanks-note">
              Thank you for expressing interest in becoming a ProGas retail
              partner! A member of our sales team will be in touch soon to
              discuss.
            </h4>
          </Col>
          <Col sm={6} className="bike">
            <Image src={Bike} responsive />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
