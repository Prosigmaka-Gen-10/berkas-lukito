import React from "react";
import {Link, Outlet, useParams} from "react-router-dom";

function Seller(){
    const param = useParams();
    return<>
        {param.namasubproduk === "gitar pemula 1 yahmahal" ? <>
                <h5>Lukito Andriansyah | Contact WA: <u>+62895XXXXX</u></h5>
                <br/>
                <Link to={"/detail/gitar pemula 1 yahmahal/seller/review"}><button>Review</button></Link>
                <Outlet/>
            </>
            :param.namasubproduk === "gitar pemula 2 yahmurah" ? <>
                <h5>Ridwan Maulana | Contact WA: <u>+62895XXXXX</u></h5>
                <br/>
                <Link to={"/detail/gitar pemula 2 yahmurah/seller/review"}><button>Review</button></Link>
                <Outlet/>
            </>:param.namasubproduk ==="bass pemula 1 yahmahal" ? <>
                <h5>Apip | Contact WA: <u>+62895XXXXX</u></h5>
                <br/>
                <Link to={"/detail/bass pemula 1 yahmahal/seller/review"}><button>Review</button></Link>
                <Outlet/>
            </>: param.namasubproduk === "bass pemula 2 yahmurah" ? <>
                <h5>Lukito Andriansyah | Contact WA: <u>+62895XXXXX</u></h5>
                <br/>
                <Link to={"/detail/bass pemula 2 yahmurah/seller/review"}><button>Review</button></Link>
                <Outlet/>
            </>: param.namasubproduk === "drum pemula 1 yahmahal" ?<>
                <h5>Naura | Contact WA: <u>+62895XXXXX</u></h5>
                <br/>
                <Link to={"/detail/drum pemula 1 yahmahal/seller/review"}><button>Review</button></Link>
                <Outlet/>
            </>: param.namasubproduk === "drum pemula 2 yahmurah" ? <>
                <h5>Akbar | Contact WA: <u>+62895XXXXX</u></h5>
                <br/>
                <Link to={"/detail/drum pemula 2 yahmurah/seller/review"}><button>Review</button></Link>
                <Outlet/>
            </>: ""}

    </>
}
export default Seller