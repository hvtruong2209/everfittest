import "./index.scss";
export const Exercise = ({ exercises }) => {
  return (
    <div className="container-exercises">
      {exercises?.map((ex, index) => {
        return (
          <div className="exercise" key={index}>
            <div className="name">
              <div>{ex.name}</div>
            </div>
            <div className="description">
              <div className="rep">x{ex.rep}</div>
              <div className="infor">{ex.information}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
