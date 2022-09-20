import React from "react";
import { useDrag } from "react-dnd";

const Picture = ({ url, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
      <img
        src={url}
        width="150px"
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
    </div>
  );
};

export default Picture;
