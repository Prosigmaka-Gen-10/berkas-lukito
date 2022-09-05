import React from "react";
import {Outlet} from "react-router-dom";

function SubCatalog(){
    return<>
        <ul>
            <li>Gitar Pemula 1 YahMahal <Outlet/></li>
        </ul>
    </>
}

export default SubCatalog