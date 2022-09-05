import React from "react";
import {Link, useParams} from "react-router-dom";


function SubCatalog(){
    const param=useParams();
    return<>{
        param.namaproduk === "gitar" ? <ul>
            <li>{param.namaproduk} Pemula 1 YahMahal <Link to={"/detail/gitar pemula 1 yahmahal"}><button>See SubCatalog detail</button></Link></li>
            <li>{param.namaproduk} Pemula 2 YahMurah <Link to={"/detail/gitar pemula 2 yahmurah"}><button>See SubCatalog detail</button></Link></li>
        </ul> : param.namaproduk === "bass" ? <ul>
            <li>{param.namaproduk} Pemula 1 YahMahal <Link to={"/detail/bass pemula 1 yahmahal"}><button>See SubCatalog detail</button></Link></li>
            <li>{param.namaproduk} Pemula 2 YahMurah <Link to={"/detail/bass pemula 2 yahmurah"}><button>See SubCatalog detail</button></Link></li>
        </ul> : param.namaproduk ==="drum"? <ul>
            <li>{param.namaproduk} Pemula 1 YahMahal <Link to={"/detail/drum pemula 1 yahmahal"}><button>See SubCatalog detail</button></Link></li>
            <li>{param.namaproduk} Pemula 2 YahMurah <Link to={"/detail/drum pemula 2 yahmurah"}><button>See SubCatalog detail</button></Link></li>
        </ul>: <p>Produk tidak ada</p>
    }

    </>
}

export default SubCatalog