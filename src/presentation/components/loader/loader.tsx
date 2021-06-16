import React from 'react';
import loaderGif from './loader.gif';

const Loader: React.FC = () => (
  <div data-testid="preloader">
    <img src={loaderGif} alt="loader" />
  </div>
);

export default Loader;
