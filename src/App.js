import React from 'react';
import './App.css';
import ERIC_NAME from './constants';
import {
  CLAUDIA_NAME,
  MOTHER_NAME,
  testFunction, //export function
  testFunction2
} from "./constants";

import FunctionComponent from "./FunctionComponent/FunctionComponent";
import ClassComponent from "./ClassComponent/ClassComponent";

import StatefulCounter from "./StatefulCounter/StatefulCounter";

import HelloWorld from "./HelloWorld/HelloWorld";

import InputBox from "./InputBox/InputBox";
function App() {
  testFunction(); //outside return doesn't need curly braces

  return (
    <div className="App">
      {/*renders both lines same as below*/}
      {testFunction2(CLAUDIA_NAME)}
      {CLAUDIA_NAME}

      {/*two lines below the same*/}
      <FunctionComponent> </FunctionComponent>
      <FunctionComponent />

      <ClassComponent />

      <StatefulCounter />

      <HelloWorld />

      <InputBox />

    </div>
  );
}

export default App;
