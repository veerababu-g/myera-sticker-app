import React from 'react';

const StickerButton = ({ src, onClick }) => (
  <img
    src={src}
    alt="sticker"
    onClick={() => onClick(src)}
    style={{ width: 50, height: 50, margin: '5px', cursor: 'pointer' }}
  />
);

export default StickerButton;
