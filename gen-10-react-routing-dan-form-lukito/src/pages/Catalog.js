import React from "react";
import {Link, Outlet} from "react-router-dom";
import subCatalog from "./catalog/SubCatalog";


function Catalog(){
    return<>

        <h3>List Product</h3>
        <ul>
            <li>Gitar <Link to={"/subcatalog/gitar"}><button>See SubCatalog</button></Link></li>
            <li>Bass <Link to={"/subcatalog/bass"}><button>See SubCatalog</button></Link></li>
            <li>Drum <Link to={"/subcatalog/drum"}><button>See SubCatalog</button></Link></li>
        </ul>
    </>
}

export default Catalog;