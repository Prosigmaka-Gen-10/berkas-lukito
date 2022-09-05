import React from "react";
import {Outlet} from "react-router-dom";


function DetailSubCatalog(){
    return<>
        <h5>Detail</h5>
        <ul>
            <li>Tahun: 2012</li>
            <li>Jenis: Akustik</li>
            <li>Produksi: YahMahal</li>
            <li>Kayu: Mahogani</li>
            <Outlet/>
        </ul>
    </>
}

export default DetailSubCatalog