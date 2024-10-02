import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import "./index.scss";
import { Exercise } from "../exercise";
export const ItemTypes = {
  WORKOUT: "WORKOUT",
};

export const Workout = ({ id, text, index, exercises, moveItem }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.WORKOUT,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.WORKOUT,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} className="container-workout" style={{ opacity }}>
      <div className="workout-title" data-handler-id={handlerId}>
        <div className="workout-name">{text}</div>
        <div className="icon-dot">...</div>
      </div>
      <Exercise exercises={exercises} />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div style={{}} className="icon-add">
          +
        </div>
      </div>
    </div>
  );
};
