import React from "react";

function X_Icon(color, shadowOp) {
  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="433.19"
        height="433.19"
        viewBox="0 0 433.19 433.19"
        className="grid_item"
        style={{
          filter: `drop-shadow(0px 0px 10px rgba(16, 221, 16,${shadowOp}))`,
          transition: "filter 1.5s",
        }}
      >
        <path
          style={{
            fill: color,
            transition: "fill 1s",
          }}
          d="m427.94,357.23l-127.96-127.96c-7-7-7-18.35,0-25.35l127.96-127.96c7-7,7-18.35,0-25.35l-45.36-45.36c-7-7-18.35-7-25.35,0l-127.96,127.96c-7,7-18.35,7-25.35,0L75.96,5.25c-7-7-18.35-7-25.35,0L5.25,50.61c-7,7-7,18.35,0,25.35l127.96,127.96c7,7,7,18.35,0,25.35L5.25,357.23c-7,7-7,18.35,0,25.35l45.36,45.36c7,7,18.35,7,25.35,0l127.96-127.96c7-7,18.35-7,25.35,0l127.96,127.96c7,7,18.35,7,25.35,0l45.36-45.36c7-7,7-18.35,0-25.35Z"
        />
      </svg>
    </>
  );
}

export default X_Icon;
