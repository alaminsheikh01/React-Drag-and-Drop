import React from "react";
import Picture from "./Picture";
import "../App.css";

const DragDrop = () => {
  const PicuteList = [
    {
      id: 1,
      url: "https://source.unsplash.com/random/200x200?sig=3",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/random/200x200?sig=2",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/random/200x200?sig=1",
    },
  ];

  return (
    <>
      <div className="Pictures">
        {PicuteList.map((picture) => (
          <Picture url={picture.url} id={picture.id} />
        ))}
      </div>
      <div className="Board"></div>
    </>
  );
};

export default DragDrop;
