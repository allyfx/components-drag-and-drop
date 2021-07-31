import { useRef } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";

interface DragItem {
  index: number;
  type: string;
}

interface ImageProps {
  index: number;
  image: {
    id: number;
    url: string;
  }
  moveImage: (dragIndex: number, hoverIndex: number) => void;
}

export function Image({
  index,
  image,
  moveImage
}: ImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'image',
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveImage(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  })

  const [collected, drag] = useDrag({
    item: { type: 'image', index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <figure
      ref={ref}
      key={image.id}
      style={{
        background: collected.isDragging ? "#E5E5E5" : "",
        border: collected.isDragging ? "1px dashed #575757" : "",
        opacity: collected.isDragging ? 0.5 : 1,
      }}
    >
      <img
        src={image.url}
        alt={image.id.toString()}
      />
    </figure>
  );
}