import React, { useRef, useState } from 'react';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';
import DownloadButton from './components/DownloadButton';


const App = () => {
  const [stickers, setStickers] = useState([]);
  const stageRef = useRef();

  const addSticker = (src) => {
    const newSticker = {
      id: Date.now(),
      src,
      x: 50 + Math.random() * 300,
      y: 50 + Math.random() * 200
    };
    setStickers([...stickers, newSticker]);
  };

  const updateStickerPosition = (id, x, y) => {
    setStickers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, x, y } : s))
    );
  };

  const deleteSticker = (id) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    
    <div style={{ display: 'flex',flexDirection:'column', gap: '20px', padding: '20px' }}>
      <h1>STICKER CANVA APP BY MYERA</h1>
      <div className="sidebar">
        
      <StickerButton src="/stickers/heart.png" onClick={addSticker} />
      <StickerButton src="/stickers/happy.png" onClick={addSticker} />
      <StickerButton src="/stickers/teddy.png" onClick={addSticker} />
      <DownloadButton stageRef={stageRef} />
    </div>
    <Canvas
      stickers={stickers}
      onDragEnd={updateStickerPosition}
      onDblClick={deleteSticker}
      stageRef={stageRef}
    />
  
    </div>
    
    
  );
};

export default App;

