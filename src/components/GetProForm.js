import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Image,
  Card,
  Modal,
} from 'react-bootstrap';
import getProgasImg from '../images/sell.png';
import Bike from '../images/bike1.png';
import regions from '../constants/regions';

const endpoints = {
  contact: '/.netlify/functions/sendSms',
};

const axios = require('axios');

function GetProgasModal(props) {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    location: '',
    area: '',
  });
  const [regionData, setRegionData] = useState({
    Location: 'Nairobi',
  });

  const sendMessage = () => {
    let { phone } = formState;
    let data = { phone };
    axios
      .post(endpoints.contact, JSON.stringify(data))
      .then((response) => {
        if (response.status !== 200) {
          handleError();
        } else {
          handleSuccess();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    axios({
      method: 'post',
      url: 'https://formspree.io/f/mzbkazoj',
      data: new FormData(form),
    })
      .then(() => {
        sendMessage();
        return navigate('/progasthankyou');
      })
      .catch((err) => console.log(err));
  };

  const handleSuccess = () => {
    setFormState({
      name: '',
      phone: '',
      location: '',
      area: '',
      loading: false,
      error: false,
    });
  };

  const handleError = (msg) => {
    setFormState({
      loading: false,
      error: true,
      msg,
    });
  };

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onChangeRegionData = (e) => {
    setRegionData({ ...regionData, [e.target.name]: e.target.value });
  };

  const { Location } = regionData;
  const dataOptions = regions[Location];

  return (
    <Modal
      {...props}
      size='xl'
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title className='model-heading'>Become a Pro</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container className='get-form'>
          <Row className='section-heading'>
            <Col>
              <h5>
                To get ProGas, kindly enter your details below. We will reach
                out shortly to connect you to one of our ProShops.
              </h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form validated={validated} onSubmit={handleOnSubmit}>
                <Form.Row className='label-text'>
                  <Col>
                    <Form.Label className='label-name'>Full Name</Form.Label>
                    <Form.Control
                      className='form-input'
                      type='text'
                      name='Name'
                      onChange={onChange}
                      pattern='^[a-zA-Z ]*$'
                      placeholder='Full Name'
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please add a name.
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label className='label-name'>Phone Number</Form.Label>
                    <Form.Control
                      className='form-input'
                      type='tel'
                      name='phone'
                      pattern='^\d{10}$'
                      onChange={onChange}
                      placeholder='Enter Phone 07xxxx'
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please enter a valid phone number.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Row>
                <Form.Row className='label-text'>
                  <Col>
                    <Form.Label className='label-name'>Location</Form.Label>
                    <Form.Control
                      className='form-input'
                      type='text'
                      name='Location'
                      onChange={onChangeRegionData}
                      pattern='^[a-zA-Z ]*$'
                      required
                      as='select'>
                      <option value='Nairobi'>Nairobi</option>
                      <option value='Central'>Central</option>
                      <option value='Western'>Western</option>
                      <option value='Nakuru'>Nakuru/Naivasha</option>
                      <option value='Southrift'>South Rift</option>
                      <option value='Northrift'>North Rift</option>
                      <option value='Eastern'>Eastern</option>
                      <option value='Other'>Other</option>
                    </Form.Control>

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please add a location
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label className='label-name'>Area</Form.Label>
                    <Form.Control
                      className='form-input'
                      name='Area'
                      type='text'
                      required
                      as='select'>
                      {dataOptions.map((o) => (
                        <option key={o.id} value={o.text}>
                          {o.text}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please add your area
                    </Form.Control.Feedback>
                  </Col>
                </Form.Row>
                <Form.Row className='label-text'>
                  <Col></Col>
                </Form.Row>
                <Button className='form-btn' type='submit'>
                  Request a Callback
                </Button>
              </Form>
            </Col>
            <Col className='bike'>
              <Image src={Bike} fluid />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default function GetProForm() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row>
      <Col>
        <Card
          className='text-center h-100 card-color'
          onClick={() => setModalShow(true)}>
          <Card.Body>
            <Image className='progaimg' src={getProgasImg} fluid />
            <br />

            <Button className='pro-btn'>Get ProGas</Button>
          </Card.Body>
        </Card>
        <GetProgasModal show={modalShow} onHide={() => setModalShow(false)} />
      </Col>
    </Row>
  );
}
