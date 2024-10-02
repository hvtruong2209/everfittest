import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ContainerDay } from "../../component/containerday/index.js";
import "./index.scss";
import { getData } from "../../utils/convert.js";

const data = getData();

export const Home = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div className="container-all-day">
          {data.map((dataDate, index) => {
            return (
              <div key={index} style={{ flex: 1, margin: "0px 4px" }}>
                <div className="date-text">{dataDate.date}</div>
                <ContainerDay numberDate={dataDate.numberDate} dataDate={dataDate.workouts} />
              </div>
            );
          })}
        </div>
      </DndProvider>
    </div>
  );
};
