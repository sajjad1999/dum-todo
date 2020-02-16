import React from "react";
import ItemTypes from "./ItemTypes";
import { useDrag } from "react-dnd";

const Option = ({ name, id }) => {
  const style = {
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    cursor: "move",
    float: "left"
  };
  const [{ isDragging }, drag] = useDrag({
    item: { name,id, type: ItemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name}  into ${dropResult.name}!`);
        console.log(item.id)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};
export default Option;
