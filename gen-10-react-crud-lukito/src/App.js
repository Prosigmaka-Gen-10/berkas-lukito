import './App.css';
import CrudApi from "./crudApi/CrudApi";
import {Outlet} from "react-router-dom";
import React from "react";

function AppTask(){
  return<>
    <div className={"App"}>
      <h1>Handling Music Store Ito</h1>
      <hr/>
      <Outlet/>
    </div>
  </>
}

export default AppTask;
