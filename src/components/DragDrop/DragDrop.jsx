import React from "react";
import { FileDrop } from "react-file-drop";
import "./DragDrop.css";

const DragDrop = () => {
  return (
    <div>
      <FileDrop
        onFrameDragEnter={(event) => console.log("onFrameDragEnter", event)}
        onFrameDragLeave={(event) => console.log("onFrameDragLeave", event)}
        onFrameDrop={(event) => console.log("onFrameDrop", event)}
        onDragOver={(event) => console.log("onDragOver", event)}
        onDragLeave={(event) => console.log("onDragLeave", event)}
        onDrop={(files, event) => console.log("onDrop!", files, event)}
      >
        <input type="file" />
      </FileDrop>
    </div>
  );
};

export default DragDrop;
