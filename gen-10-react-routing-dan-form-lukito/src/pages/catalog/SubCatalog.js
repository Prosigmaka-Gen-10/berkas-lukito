import React from "react";
import {Outlet} from "react-router-dom";

function SubCatalog(){
    return<>
        <ul>
            <li>Gitar Pemula 1 YahMahal <Outlet/></li>
            <li>Gitar Pemula 2 YahMurah</li>
            <li>Gitar Pemula 1 IhBener</li>
            <li>Gitar Pemula 2 GaRela</li>
        </ul>
    </>
}

export default SubCatalog