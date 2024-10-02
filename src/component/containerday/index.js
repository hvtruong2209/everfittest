import update from "immutability-helper";
import { useCallback, useMemo, useState } from "react";
import { Workout } from "../workout/index.js";
import "./index.scss";
export const ContainerDay = ({ numberDate, dataDate }) => {
  const [data, setData] = useState(dataDate);

  const checkCurrentDate = useMemo(() => {
    const current = new Date();
    return current.getDate().toString().padStart(2, "0") === numberDate;
  }, [numberDate]);

  const moveItem = useCallback((dragIndex, hoverIndex) => {
    setData((prevItems) =>
      update(prevItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevItems[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <div className="container-day">
      <div className="header-title">
        <div style={{ color: checkCurrentDate ? "#5b57cb" : "#6a7987" }}>{numberDate}</div>
        <div className="icon-add">+</div>
      </div>
      <div>
        {data.map((item, index) => (
          <Workout
            key={item.id}
            index={index}
            id={item.id}
            text={item.name}
            exercises={item.exercises}
            moveItem={moveItem}
          />
        ))}
      </div>
    </div>
  );
};
