
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

const DraggableSticker = ({ sticker, onDragEnd, onDblClick }) => {
  const [img] = useImage(sticker.src);
  return (
    <KonvaImage
      image={img}
      x={sticker.x}
      y={sticker.y}
      width={60}
      height={60}
      draggable
      onDragEnd={(e) => onDragEnd(sticker.id, e.target.x(), e.target.y())}
      onDblClick={() => onDblClick(sticker.id)}
    />
  );
};

const Canvas = ({ stickers, onDragEnd, onDblClick, stageRef }) => (
  <Stage width={600} height={400} ref={stageRef} style={{ border: '1px solid #ccc' }}>
    <Layer>
      {stickers.map((s) => (
        <DraggableSticker
          key={s.id}
          sticker={s}
          onDragEnd={onDragEnd}
          onDblClick={onDblClick}
        />
      ))}
    </Layer>
  </Stage>
);

export default Canvas
