import React from "react";

function O_Icon(color, shadowOp) {
  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="533.63"
        height="533.63"
        viewBox="0 0 533.63 533.63"
        className="grid_item"
        style={{
          filter: `drop-shadow(0px 0px 10px rgba(16, 221, 16,${shadowOp}))`,
          transition: "filter 1.5s",
        }}
      >
        <defs></defs>
        <path
          style={{
            fill: color,
            transition: "fill 1s",
            // filter: "drop-shadow(0px, 0px, 10px, red)",
          }}
          d="m266.81,533.63c-71.27,0-138.27-27.75-188.67-78.15S0,338.08,0,266.81,27.75,128.54,78.15,78.15C128.54,27.75,195.55,0,266.81,0s138.27,27.75,188.67,78.15c50.39,50.39,78.15,117.4,78.15,188.67s-27.75,138.27-78.15,188.67-117.4,78.15-188.67,78.15Zm0-433.63c-91.98,0-166.81,74.83-166.81,166.81s74.83,166.81,166.81,166.81,166.81-74.83,166.81-166.81-74.83-166.81-166.81-166.81Z"
        />
      </svg>
    </>
  );
}

export default O_Icon;
