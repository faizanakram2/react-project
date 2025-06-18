import React from 'react';
import heroShape1 from '../assets/hero-shape-1.svg';
import heroShape2 from '../assets/hero-shape-2.svg';

const BackgroundWaves = () => (
  <>
    <img
      src={heroShape1}
      alt="shape"
      loading="lazy"
      width={411}
      height={276}
      decoding="async"
      className="absolute left-0 top-0 -z-10"
      style={{ color: 'transparent' }}
    />
    <img
      src={heroShape2}
      alt="shape"
      loading="lazy"
      width={820}
      height={692}
      decoding="async"
      className="absolute right-0 top-0 -z-10"
      style={{ color: 'transparent' }}
    />
  </>
);

export default BackgroundWaves;
