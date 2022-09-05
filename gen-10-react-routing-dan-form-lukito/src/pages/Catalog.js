import React from "react";
import {Link, Outlet} from "react-router-dom";


function Catalog(){
    return<>

        <h1>List Product</h1>
        <ul>
            <li>Gitar <Outlet/></li>
        </ul>
    </>
}

export default Catalog;