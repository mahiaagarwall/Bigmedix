import React, { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<Props> = ({ src, fallbackSrc = '/images/fallback.jpg', alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return <img src={imgSrc} alt={alt} onError={() => setImgSrc(fallbackSrc)} {...props} />;
};

export default ImageWithFallback;
