import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => (
  <ContentLoader
    speed={2}
    width={272}
    height={457}
    viewBox="0 0 272 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="268" rx="0" ry="0" width="272" height="24" />
    <rect x="0" y="312" rx="0" ry="0" width="272" height="84" />
    <rect x="0" y="417" rx="0" ry="0" width="90" height="27" />
    <rect x="119" y="408" rx="0" ry="0" width="151" height="44" />
  </ContentLoader>
);

export default LoadingBlock;
