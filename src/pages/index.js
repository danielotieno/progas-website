import React from 'react';
import ProForm from '../components/ProForm';
import Layout from '../components/Layout';
import SocialMedia from '../components/SocialMedia';
import Gallery from '../components/Gallery';
import SafetyPack from '../components/SafetyPack';
import Slider from '../components/Slider.js';
import SEO from '../components/SEO.js';

export default function Home() {
  return (
    <Layout>
    <SEO title="A website for ProGas Kenya" />
      <Slider />
      <ProForm />
      <SocialMedia />
      <Gallery />
      <SafetyPack />
    </Layout>
  );
}
