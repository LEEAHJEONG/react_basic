import React, { Component } from "react";
import "./react.css";
import styled from "@emotion/styled";

const Main = ({ title }) => {
  return (
    <div>
      <h1>안녕하세요. 나는 {title}입니다.</h1>
    </div>
  );
};

export default Main;
