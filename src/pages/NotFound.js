import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      잘못된 경로로 접근하였습니다.
    </div>
  );
};

export default NotFound;
