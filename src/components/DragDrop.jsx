import React, { useState } from "react";
import Picture from "./Picture";
import "../App.css";
import { useDrop } from "react-dnd";

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

const DragDrop = () => {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PicuteList.filter((picture) => id === picture.id);
    // setBoard((board) => [...board, pictureList[0]]);
    setBoard([pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures">
        {PicuteList.map((picture) => (
          <Picture url={picture.url} id={picture.id} />
        ))}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => (
          <Picture url={picture.url} id={picture.id} />
        ))}
      </div>
    </>
  );
};

export default DragDrop;
