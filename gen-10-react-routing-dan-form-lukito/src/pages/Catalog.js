import React from "react";
import {Link, Outlet} from "react-router-dom";


function Catalog(){
    return<>

        <h3>List Product</h3>
        <ul>
            <li>Gitar <Outlet/></li>
        </ul>
    </>
}

export default Catalog;