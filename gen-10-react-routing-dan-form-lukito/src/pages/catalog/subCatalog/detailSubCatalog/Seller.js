import React from "react";
import {Outlet} from "react-router-dom";

function Seller(){
    return<>
        <h5>Penjual: Lukito Andriansyah <Outlet/></h5>
    </>
}
export default Seller