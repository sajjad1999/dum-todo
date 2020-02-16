import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import DND from './DND'

const Container = props => {
  return (
    <div>
      <DndProvider backend={Backend}>
        <DND/>
      </DndProvider>
    </div>
  );
};

export default Container;
